<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Work;

class Image extends Model
{
    use HasFactory;
    protected $fillable =[
        'image',
        'work_id',
    ];
    public function works(){
        return $this->belongsTo(Work::class);
    }
}
