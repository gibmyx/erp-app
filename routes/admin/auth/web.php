<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\Auth\ForgotPasswordController;
use App\Http\Controllers\Admin\Auth\NewPasswordController;
use App\Http\Controllers\Admin\Shared\AppAdminController;
use Illuminate\Support\Facades\Route;


Route::middleware('guest')
    ->prefix("admin")
    ->group(function () {
        Route::get('/auth/login', AppAdminController::class)->name('login');
        Route::get('/auth/forgot-password', AppAdminController::class)->name('password.admin.request');
        Route::get('/auth/reset-password/{token}', AppAdminController::class)->name('password.admin.reset');

        Route::post('/auth/login', AuthenticatedSessionController::class);
        Route::post('/auth/forgot-password', ForgotPasswordController::class);
        Route::post('/auth/reset-password', NewPasswordController::class);
    });

Route::middleware('auth:admin')
    ->prefix("admin")
    ->group(function () {
        Route::post('/auth/logout', [AuthenticatedSessionController::class, 'logout']);
        Route::get('/auth/verify-user', [AuthenticatedSessionController::class, 'veriftUser']);
    });

