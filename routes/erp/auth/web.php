<?php

use App\Http\Controllers\Erp\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Erp\Auth\ForgotPasswordController;
use App\Http\Controllers\Erp\Auth\NewPasswordController;
use App\Http\Controllers\Erp\Shared\AppErpController;
use Illuminate\Support\Facades\Route;


Route::middleware('guest:web')->group(function () {
    Route::get('/auth/login', AppErpController::class)->name('login');
    Route::get('/auth/forgot-password', AppErpController::class)->name('password.request');
    Route::get('/auth/reset-password/{token}', AppErpController::class)->name('password.reset');

    Route::post('/auth/login', AuthenticatedSessionController::class);
    Route::post('/auth/forgot-password', ForgotPasswordController::class);
    Route::post('/auth/reset-password', NewPasswordController::class);
});

Route::middleware('auth:web')->group(function () {
    Route::post('/auth/logout', [AuthenticatedSessionController::class, 'logout']);
    Route::get('/auth/verify-user', [AuthenticatedSessionController::class, 'veriftUser']);
});

