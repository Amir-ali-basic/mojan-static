<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Language;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::latest()->paginate(10);
        $trashed = Category::onlyTrashed()->get();
        return view('site.admin.categories',compact('categories','trashed'));
    }
    /**
     * Display a listing of the deleted resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function trashed()
    {
        $categories = Category::all();
        $trashed = Category::onlyTrashed()->paginate(10);
        return view('site.admin.trashed',compact('trashed','categories'));
    }

    public function create()
    {
        return view('site.admin.create_category', ['languages' => Language::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Category::create([
            'title' => ['en' => $request['title_en'], 'me' => $request['title_me']]
        ]);

        \session()->flash('message','Category created sucessfully');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        $languages = Language::all();
        return view('site.admin.edit_category', compact('category', 'languages'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category= Category::find($id);
        $category->update([
            'title' => ['en' => $request['title_en'], 'me' => $request['title_me']]
        ]);
        session()->flash('message','Category '.$category->name.'has been updated successfully');
        return \redirect()->route('admin.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category= Category::find($id);
        $category->delete();
        \session()->flash("message",'Category deleted successfully!');
        return back();
    }
        public function retrieve($id)
    {
        $category= Category::withTrashed()->find($id);
        $category->restore();
        \session()->flash("message",'Category retrieved successfully!');
        return back();
    }
            public function remove($id)
    {
        $category= Category::withTrashed()->find($id);
        $category->forceDelete();
        \session()->flash("message",'Category removed successfully!');
        return back();
    }
}
