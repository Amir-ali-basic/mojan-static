<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        User::query()->create([
            'name' => $faker->name,
            'email' => 'admin@email.com',
            'is_admin' => true,
            'password' => '12345678',
        ]);

        for ($i = 0; $i < 10; $i++)
            User::query()->create([
                'name' => $faker->name,
                'email' => $faker->email,
                'is_admin' => $faker->numberBetween(0 , 1),
                'password' => '12345678',
            ]);
    }
}
