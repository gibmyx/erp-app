<?php

use App\Http\Controllers\Erp\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Erp\Shared\AppErpController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:web')->group(function () {
    Route::get('/dashboard', AppErpController::class)->name('dashboard');
    Route::get('/roles/list', AppErpController::class);
});
