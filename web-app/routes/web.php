<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TopController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/top', function () {
    return Inertia::render('Top', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'id' => "section1",
    ]);
})->name('top');

Route::get('/top/{id}', function ($id) {
    return Inertia::render('Top', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'id' => $id,
    ]);
})->name('headerTop');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
