<?php

use App\Http\Controllers\VinhoController;
use App\Models\Vinho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/vinho', [VinhoController::class, 'index']);
// Route::get('/vinho/{id}', [VinhoController::class, 'show']);
// Route::post('/vinho', [VinhoController::class, 'store']);
// Route::put('vinho/{id}', [VinhoController::class, "update"]);
// Route::delete('vinho/{id}', [VinhoController::class, "destroy"]);

Route::apiResource('vinho', VinhoController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
