<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;
use App\Models\Work;
use App\Models\Image;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;


class HomeController extends Controller
{
    public function index()
    {
        $works = Work::all();
        $posts = Post::latest()->paginate(10);
        $cat = Category::all();
        $languages = Language::all();
        return view('welcome', compact('posts', 'cat', 'works', 'languages'));
    }
    // public function worksOnHomePage(){
    // $works = Work::all();

    // return view('welcome',compact('works'));

    // }
    public function blogs()
    {
        $posts = Post::latest()->paginate(10);
        $languages = Language::all();
        return view('site.pages.blog', compact('posts', 'languages'));
    }

    public function singleBlog(Request $request, $id)
    {
        $post = Post::find($id);
        $languages = Language::all();
        return view("site.pages.singleBlog", compact('post', 'languages'));

    }

    public function works()
    {
        $works = Work::orderBy('created_at', 'DESC')->paginate(100);
        $languages = Language::all();
        return view('site.pages.works', compact('works', 'languages'));

    }

    public function singleWork(Request $request, $id)
    {
        $images = Image::find($id);
        $works = Work::find($id);
        $languages = Language::all();

        return view('site.pages.singlePortfolio', compact('works', 'images', 'languages'));
    }

    public function about() {
        $languages = Language::all();
        return view('site.pages.about', compact('languages'));
    }

    public function contact() {
        $languages = Language::all();
        return view('site.pages.contact', compact('languages'));
    }

    public function services() {
        $languages = Language::all();
        return view('site.pages.services', compact('languages'));
    }

    public function info() {
        $languages = Language::all();
        return view('site.pages.korisnik', compact('languages'));
    }

    public function obuko() {
        $languages = Language::all();
        return view('site.pages.obuko', compact('languages'));
    }

}
