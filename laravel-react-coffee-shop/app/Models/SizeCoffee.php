<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SizeCoffee extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'size'];
}