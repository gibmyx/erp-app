<?php

use App\Http\Controllers\Admin\Shared\AppAdminController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:admin')
    ->prefix("admin")
    ->group(function () {
    Route::get('/dashboard', AppAdminController::class)->name('dashboard');
});
