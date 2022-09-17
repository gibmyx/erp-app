<?php

namespace App\Http\Controllers\Admin\Auth;

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
    private $messages = [
        Password::PASSWORD_RESET => "Contraseña cambiada con exito.",
        Password::INVALID_USER => "El correo no es valido.",
        Password::INVALID_TOKEN => "El link de recuperacion de contraseña no es valido",
    ];

    public function __invoke(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $status = Password::broker('admin')->reset(
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
            "message" => key_exists($status, $this->messages)
                ? $this->messages[$status]
                : "Ah currido un error. Por favor intentelo mas tarde",
            "ok" => $status == Password::PASSWORD_RESET ? true : false
        ], $code);
    }
}
