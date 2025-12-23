<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SizeCoffeeSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('size_coffees')->insert([
            ['name' => 'Small', 'size' => 150],
            ['name' => 'Medium', 'size' => 250],
            ['name' => 'Large', 'size' => 500],
        ]);
    }
}