<?php

use App\Http\Controllers\Erp\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Erp\Shared\AppErpController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/auth/login', AppErpController::class)->name('login');
    Route::get('/auth/forgot-password', AppErpController::class)->name('password.request');
    Route::get('/auth/reset-password/{token}', AppErpController::class)->name('password.reset');

    Route::post('/auth/login', AuthenticatedSessionController::class);
    Route::post('/auth/logout', [AuthenticatedSessionController::class, 'logout']);
});
