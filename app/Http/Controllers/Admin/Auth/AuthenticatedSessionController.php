<?php

namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthenticatedSessionController extends Controller
{
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email', 'password');

        if(false == Auth::guard("admin")->attempt($credentials))
            return new Response(["message" => "El correo o la contraseña no coinciden"], Response::HTTP_NOT_FOUND);

        return new Response([
            'user' => Auth::user()
        ], Response::HTTP_OK);
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return new Response("", Response::HTTP_OK);
    }

    public function veriftUser()
    {
        return new Response([
            'user' => Auth::guard('admin')->user()
        ], Response::HTTP_OK);
    }
}
