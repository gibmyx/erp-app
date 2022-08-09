<?php

namespace App\Http\Controllers\Erp\Shared;

use App\Http\Controllers\Controller;
use function view;

class AppErpController extends Controller
{
    public function __construct()
    {
//        $this->middleware(["auth"]);
    }

    public function __invoke()
    {
        return view("app");
    }
}
