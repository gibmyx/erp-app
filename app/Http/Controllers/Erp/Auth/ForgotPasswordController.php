<?php

declare(strict_types=1);

namespace App\Http\Controllers\Erp\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

final class ForgotPasswordController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT){
            $code = Response::HTTP_OK;
        }elseif ($status == Password::RESET_THROTTLED) {
            $code = Response::HTTP_UNPROCESSABLE_ENTITY;
        }elseif ($status == Password::INVALID_USER) {
            $code = Response::HTTP_BAD_REQUEST;
        } else {
            $code = Response::HTTP_BAD_REQUEST;
        }

        return response()->json([
            "message" => $status,
            "ok" => $status == Password::RESET_LINK_SENT ? true : false
        ], $code);
    }
}
