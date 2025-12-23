<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CoffeeController;

Route::apiResource('coffee', CoffeeController::class)->only(['index']);

// Публичные роуты (без авторизации)
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

// Защищённый роут (только для авторизованных)
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');