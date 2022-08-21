<?php

namespace App\Http\Controllers\Erp\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;

class NewPasswordController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET){
            $code = Response::HTTP_OK;
        } elseif ($status == Password::INVALID_USER || $status == Password::INVALID_TOKEN) {
            $code = Response::HTTP_BAD_REQUEST;
        } else {
            $code = Response::HTTP_BAD_REQUEST;
        }

        return response()->json([
            "message" => $status,
            "ok" => $status == Password::PASSWORD_RESET ? true : false
        ], $code);
    }
}
