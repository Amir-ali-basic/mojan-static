<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        for ($i = 0; $i < 30; $i++)
            Post::query()->create([
                'title' => ['en' => ucfirst($faker->word).' EN', 'me' => ucfirst($faker->word).' ME'],
                'desc' => ['en' => $faker->text(100).' EN', 'me' => $faker->text(100).' ME'],
                'image' => asset('storage/images/test-img.jpg'),
                'post_images' => asset('storage/images/test-img.jpg'),
                'user_id' => $faker->numberBetween(1, User::query()->count()),
                'category_id' => $faker->numberBetween(1, Category::query()->count()),
            ]);
    }
}
