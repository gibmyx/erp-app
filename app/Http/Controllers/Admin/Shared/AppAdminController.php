<?php

namespace App\Http\Controllers\Admin\Shared;

use App\Http\Controllers\Controller;
use function view;

class AppAdminController extends Controller
{
    public function __construct()
    {
//        $this->middleware(["auth"]);
    }

    public function __invoke()
    {
        return view("app-admin");
    }
}
