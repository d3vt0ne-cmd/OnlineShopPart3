<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoffeeResource;
use App\Models\Coffee;
use Illuminate\Http\Request;

class CoffeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $coffees = Coffee::with('size')
        ->orderBy('id', 'desc')
        ->paginate(10);

    return CoffeeResource::collection($coffees)
        ->additional([
            'meta' => [
                'refreshed_at' => now()->toDateTimeString()
            ]
        ])
        ->response()
        ->header('Cache-Control', 'no-cache, no-store, must-revalidate')
        ->header('Pragma', 'no-cache')
        ->header('Expires', '0');
}
}