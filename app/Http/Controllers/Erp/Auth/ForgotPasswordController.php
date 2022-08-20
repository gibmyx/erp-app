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
    public function __construct()
    {
    }

    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return response()->json([
                "message" => $status,
                "ok" => true
            ], Response::HTTP_OK);
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}
