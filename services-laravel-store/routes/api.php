<?php

use App\Http\Controllers\TodoController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::get('/index',  [TodoController::class, 'index']);
Route::post('/store',  [TodoController::class, 'store']);
Route::get('/show/{id}',  [TodoController::class, 'show']);
Route::post('/update',  [TodoController::class, 'update']);
Route::post('/delete',  [TodoController::class, 'delete']);
