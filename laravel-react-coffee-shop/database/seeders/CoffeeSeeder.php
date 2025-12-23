<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoffeeSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('coffees')->insert([
            [
                'name' => 'Espresso',
                'description' => 'Strong and bold espresso shot.',
                'base_price' => 250.00,
                'size_id' => 1,
                'image' => null,
                'available' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Latte',
                'description' => 'Creamy milk with rich espresso.',
                'base_price' => 500.00,
                'size_id' => 2,
                'image' => null,
                'available' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cappuccino',
                'description' => 'Espresso with steamed milk foam.',
                'base_price' => 750.00,
                'size_id' => 3,
                'image' => null,
                'available' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}