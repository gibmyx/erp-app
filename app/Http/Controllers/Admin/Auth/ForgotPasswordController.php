<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

final class ForgotPasswordController extends Controller
{
    private $messages = [
        Password::RESET_LINK_SENT => "Correo de enviado con exito.",
        Password::RESET_THROTTLED => "Por favor espere unos minutos para enviar nuevamente el correo.",
        Password::INVALID_USER => "El correo no es valido.",
    ];

    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::broker('admin')->sendResetLink(
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
            "message" => key_exists($status, $this->messages)
                ? $this->messages[$status]
                : "Ah currido un error. Por favor intentelo mas tarde",
            "ok" => $status == Password::RESET_LINK_SENT ? true : false
        ], $code);
    }
}
