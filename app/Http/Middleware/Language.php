<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\App;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class Language
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->lang) {
            Session::put('locale', $request->lang);
            App::setLocale(Session::get('locale'));
        }
        else if (Session::get('locale')) {
            App::setLocale(Session::get('locale'));
        }
        else {
            Session::put('locale', 'me');
            App::setLocale(Session::get('locale'));
        }

        return $next($request);
    }
}
