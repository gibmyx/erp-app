<?php

use App\Http\Controllers\Admin\Shared\AppAdminController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:web')->group(function () {
    Route::get('/admin/dashboard', AppAdminController::class)->name('dashboard');
});
