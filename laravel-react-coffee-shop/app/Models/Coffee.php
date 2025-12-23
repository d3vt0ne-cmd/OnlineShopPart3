<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coffee extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'base_price',
        'size_id',
        'image',
        'available',
    ];

    /**
     * Отношение к размеру порции
     */
    public function size()
    {
        return $this->belongsTo(SizeCoffee::class, 'size_id');
    }
}