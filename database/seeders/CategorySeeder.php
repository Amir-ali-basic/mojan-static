<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run()
    {
        for ($i = 0; $i < 10; $i++)
            Category::query()->create([
                'title' => ['en' => "Title $i EN", 'nl' => "Title $i NL", 'me' => "Title $i ME"]
            ]);
    }
}
