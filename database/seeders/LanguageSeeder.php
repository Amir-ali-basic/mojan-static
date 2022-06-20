<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{

    private $languages = [
        'en' => 'English',
        'me' => 'Montenegrin',
    ];

    public function run()
    {
        foreach ($this->languages as $code => $name) {
            Language::query()->create([
                'name' => $name,
                'code' => $code,
            ]);
        }
    }
}
