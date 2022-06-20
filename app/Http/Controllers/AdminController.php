<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use App\Models\Category;
use App\Models\Work;



class AdminController extends Controller
{
    public function home(){
        $postsCount= Post::all()->count();
        $categoriesCount= Category::all()->count();
        $usersCount= User::all()->count();
        $worksCount= Work::all()->count();

        $recentPosts = Post::latest()->take(5)->get();
        $recentCategories = Category::latest()->take(5)->get();
        $recentWork = Work::latest()->take(5)->get();



        return view('site.admin.home',compact('postsCount','categoriesCount','usersCount','worksCount','recentCategories','recentPosts','recentWork'));
    }
}
