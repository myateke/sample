<?php

use Illuminate\Http\Request;

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

// 認証は一旦省略
Route::resource('/items', 'ItemController', ['except' => ['create', 'edit']]);
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });