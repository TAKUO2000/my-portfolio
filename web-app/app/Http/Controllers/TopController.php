<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class TopController extends Controller
{
    //
    public function index($id)
{
    return Inertia::render('Top',[
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'id' => $id,
    ]);
}
}

