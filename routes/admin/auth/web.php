<?php

use App\Http\Controllers\Erp\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Erp\Auth\ForgotPasswordController;
use App\Http\Controllers\Erp\Auth\NewPasswordController;
use App\Http\Controllers\Admin\Shared\AppAdminController;
use Illuminate\Support\Facades\Route;


Route::middleware('guest')
    ->prefix("admin")
    ->group(function () {
    Route::get('/auth/login', AppAdminController::class)->name('login');
    Route::get('/auth/forgot-password', AppAdminController::class)->name('password.request');
    Route::get('/auth/reset-password/{token}', AppAdminController::class)->name('password.reset');

//    Route::post('/auth/login', AuthenticatedSessionController::class);
//    Route::post('/auth/forgot-password', ForgotPasswordController::class);
//    Route::post('/auth/reset-password', NewPasswordController::class);
});

Route::middleware('auth:web')->group(function () {
//    Route::post('/auth/logout', [AuthenticatedSessionController::class, 'logout']);
//    Route::get('/auth/verify-user', [AuthenticatedSessionController::class, 'veriftUser']);
});

