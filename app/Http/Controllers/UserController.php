<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users= User::latest()->paginate(10);
        $trashed_users= User::onlyTrashed()->paginate(10);
        return view('site.admin.users',compact('users','trashed_users'));
    }
    //promote users to admin
        public function promote($id)
    {
        $user = User::find($id);
        $user->is_admin = 1;
        $user->save();
        \session()->flash("message", "User promoted to admin");
        return back();
    }
    //trashed users
        public function destroy($id)
    {
        $user= User::find($id);
        $user->delete();
        \session()->flash("message", "User trashed successfully");
        return back();

    }
    //     public function trashed_users()
    // {
    //     $users = User::latest()->paginate(10);
    //     $trashed_users= User::onlyTrashed()->paginate(10);
    //     return view('site.admin.trashed_users',compact('users','trashed_users'));
    // }
        //demote users
        public function demote($id)
    {
        $user = User::find($id);
        $user->is_admin = 0;
        $user->save();
        \session()->flash("message", "User demoted ");
        return back();

    }
    //users profile
            public function profile()
    {

        return view("site.admin.profile");

    }
    //update users profile
            public function update(Request $request , $id)
    {
        $user= User::find($id);
        $user->update($request->all());
        \session()->flash("message", "User profile updated ");

        return back();

    }
    //show users profile
    public function user_profile( $id)
    {
        $user= User::find($id);
        return view("site.admin.user_profile",compact('user'));

    }
}
