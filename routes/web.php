<?php

use App\Http\Controllers\LanguageController;
use App\Models\Language;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware('language')->group(function () {
    Route::get('/', [HomeController::class,'index'])->name('welcome');
    Route::get('/products', [HomeController::class,'blogs']);
    Route::get('/{id}/products', [HomeController::class,'singleBlog'])->name('blog.single');
    Route::get('/works', [HomeController::class,'works']);
    Route::get('/{id}/works', [HomeController::class,'singleWork'])->name('work.single');
    Route::get('/about', [HomeController::class, 'about']);
    Route::get('/contact', [HomeController::class, 'contact']);
    Route::get('/services', [HomeController::class, 'services']);
    Route::get('/info', [HomeController::class, 'info']);
    Route::get('/obuko', [HomeController::class, 'obuko']);
});



Route::prefix('admin')->group(function(){
    Route::name('admin.')->group(function(){
        //admin home
        Route::get('/home',[AdminController::class, 'home'])->name('home');
        //post categories routes
        Route::resource('/categories', CategoryController::class);
        Route::get('/cat/trashed', [CategoryController::class, 'trashed'])->name('categories.trashed');
        Route::get('/cat/{id}/restore', [CategoryController::class, 'retrieve'])->name('categories.restore');
        Route::get('/cat/{id}/remove', [CategoryController::class, 'remove'])->name('categories.remove');
        //posts routes
        // Route::resource('/posts', PostController::class);
        Route::get('/posts/index', [PostController::class,'index'])->name('posts.index');
        Route::get('/posts/create', [PostController::class,'create'])->name('posts.create');
        Route::post('/posts/store', [PostController::class,'store'])->name('posts.store');
        Route::get('/posts/{id}/edit', [PostController::class,'edit'])->name('posts.edit');
        Route::get('/posts/trashed', [PostController::class, 'trashed_posts'])->name('posts.trashed');
        Route::post('/posts/{id}/update', [PostController::class,'update'])->name('posts.update');
        Route::get('/posts/{id}/destroy', [PostController::class,'destroy'])->name('posts.destroy');
        Route::get('/trashed_posts/{id}/restore', [PostController::class,'restore'])->name('trashed_posts.restore');
        Route::get('/trashed_posts/{id}/remove', [PostController::class,'remove'])->name('trashed_posts.remove');

        //users Routes
        Route::get('/users/index', [UserController::class,'index'])->name('users.index');
        Route::get('/users/{id}/promote', [UserController::class,'promote'])->name('users.promote');
        Route::get('/users/{id}/demote', [UserController::class,'demote'])->name('users.demote');
        // Route::get('/users/trashed', [UserController::class, 'trashed_users'])->name('users.trashed');
        Route::get('/users/profile', [UserController::class,'profile'])->name('users.profile');
        Route::get('/users/{id}/user_profile', [UserController::class,'user_profile'])->name('users.user_profile');
        Route::get('/users/{id}/destroy', [UserController::class,'destroy'])->name('users.destroy');
        Route::post('/users/{id}/profile/update', [UserController::class,'update'])->name('users.update');
        // Route::post('/users/{id}/profile/update', [UserController::class,'update'])->name('users.update');

        // projects routes
        Route::get('/works/index', [WorkController::class,'index'])->name('works.index');
        Route::get('/works/create', [WorkController::class,'create'])->name('works.create');
        Route::post('/works/store', [WorkController::class,'store'])->name('works.store');
        Route::get('/works/{id}/destroy', [WorkController::class,'destroy'])->name('works.destroy');
        Route::get('/works/{id}/edit', [WorkController::class,'edit'])->name('works.edit');



    });
});

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
