<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Language;
use Illuminate\Http\Request;
use App\Models\Post;
use Str;

class PostController extends Controller
{
    //image upload method
    public function uploadImage($image, $path)
    {
        $imageName = $image->getClientOriginalName();
        $string = "Proizvod_";
        $new_image_name = $string . $imageName;
        $image->move($path, $new_image_name);

        return $new_image_name;
    }

    //for displaying all posts
    public function index()
    {
        $posts = Post::latest()->paginate(10);
        $trashed_posts = Post::onlyTrashed()->paginate(10);
        return view('site.admin.posts', compact('posts', 'trashed_posts'));
    }

    //for displaying all trashed posts
    public function trashed_posts()
    {
        $posts = Post::latest()->paginate(10);
        $trashed_posts = Post::onlyTrashed()->paginate(10);
        return view('site.admin.trashed_posts', compact('posts', 'trashed_posts'));
    }

    //display form for creating post
    public function create()
    {
        $categories = Category::all();
        $languages = Language::all();
        return view('site.admin.create_post', compact('categories', 'languages'));
    }

    //save post to the database
    public function store(Request $request)
    {
        // $request->validate([
        //     'title' =>'required',
        //     'desc' =>'required',
        //     'user_id'=>'required',
        //     'category_id'=>'required',
        //     'image'=>'required'
        // ]);
        // dd($request);

        // dd($request->all());

        $post = new Post;
        if ($request->images)
            foreach ($request->images as $file) {
                $getFileOriginalName = $file;
                $path = "storage/posts";
                $imageFullName = $this->uploadImage($getFileOriginalName, $path);
                $post->post_images = $imageFullName;
            }
        //Upload image if in request
        if ($request->has('image')) {
            $image = $request->image;
            $path = "storage/posts";
            $imageName = $this->uploadImage($image, $path);
            $post->image = $imageName;
        }
        $post->title = $request->title;
        $post->desc = $request->desc;
        $post->category_id = $request->category_id;

        // TODO: Field for user_id on admin panel is missing then uncomment next line
       $post->user_id= $request->user_id;

        $post->save();
        session()->flash('message', 'Post created successfully!');
        return back();
    }


    public function edit($id)
    {
        $post = Post::find($id);
        $categories = Category::all();
        $languages = Language::all();
        return view('site.admin.edit_post', compact('post', 'categories', 'languages'));
    }


    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $imageName = $post->image;
//        $request->validate([
//            'title' =>'required',
//            'desc' =>'required',
//            'user_id'=>'required',
//            'category_id'=>'required',
//        ]);

        //Upload image if in request
        if ($request->has('image')) {
            $image = $request->image;
            $path = "storage/posts";

            $imageName = $this->uploadImage($image, $path);
        }

        $post->title = ['me' => $request->title_me, 'en' => $request->title_en];
        $post->desc = $request->desc;
        $post->user_id = $request->user_id;
        $post->category_id = $request->category_id;
        $post->image = $request->$imageName;
        $post->save();
        session()->flash('message', 'Post updated successfully!');
        return back();
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        session()->flash('message', 'Post deleted successfully!');
        return back();
    }
}
