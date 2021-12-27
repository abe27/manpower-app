<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdministratorController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PositionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('/administrator')->group(function () {
        Route::get('/', [AdministratorController::class, 'index'])->name('admin.index');
        Route::prefix('/section')->group(function () {
            Route::get('/', [SectionController::class, 'index'])->name('admin.section.get');
        });

        Route::prefix('/department')->group(function () {
            Route::get('/', [DepartmentController::class, 'index'])->name('admin.department.get');
        });

        Route::prefix('/position')->group(function () {
            Route::get('/', [PositionController::class, 'index'])->name('admin.position.get');
        });
    });
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
