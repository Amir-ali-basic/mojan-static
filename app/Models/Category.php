<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use HasFactory, SoftDeletes, HasTranslations;

    protected $guarded = ['id'];
    protected $date = ['deleted_at'];

    public $translatable = ['title'];

    public function posts(){
        return $this->hasMany('App\Models\Post');
    }
}
