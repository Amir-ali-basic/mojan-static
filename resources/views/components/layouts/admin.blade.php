<!DOCTYPE html>
<html lang="en">


<!-- index.html  21 Nov 2019 03:44:50 GMT -->
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>Admin Dashboard </title>
  <!-- General CSS Files -->
  <link rel="stylesheet" href="/assets/admin/css/app.min.css">
  <!-- Template CSS -->
  <link rel="stylesheet" href="/assets/admin/css/style.css">
  <link rel="stylesheet" href="/assets/admin/css/components.css">
  <!-- Custom style CSS -->
  <link rel="stylesheet" href="/assets/admin/css/custom.css">
  <link rel='shortcut icon' type='image/x-icon' href='assets/img/favicon.ico' />
    <!-- Ck editor -->
  <script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>
</head>

<body>
  {{-- @if(auth()->check() && auth()->user()->is_admin) --}}
  <div class="loader"></div>
  <div id="app">
    <div class="main-wrapper main-wrapper-1">
      <div class="navbar-bg"></div>
      <nav class="navbar navbar-expand-lg main-navbar sticky">
        <div class="form-inline mr-auto">
          <ul class="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg
									collapse-btn"> <i data-feather="align-justify"></i></a></li>
            <li><a href="#" class="nav-link nav-link-lg fullscreen-btn">
                <i data-feather="maximize"></i>
              </a></li>
            <li>
              <form class="form-inline mr-auto">
                <div class="search-element">
                  <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200">
                  <button class="btn" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav navbar-right">

          <li class="dropdown"><a href="#" data-toggle="dropdown"
              class="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="/assets/images/logo/Mojan.svg"
                class="user-img-radious-style"> <span class="d-sm-none d-lg-inline-block"></span></a>
            <div class="dropdown-menu dropdown-menu-right pullDown">
              <div class="dropdown-title">@if (auth()->check())
                {{auth()->user()->name}}
                
              @endif</div>
              <a href="{{route("admin.users.profile")}}" class="dropdown-item has-icon"> <i class="far
										fa-user"></i> Profile
              </a>
              <div class="dropdown-divider"></div>
              <a href="auth-login.html" class="dropdown-item has-icon text-danger"> <i class="fas fa-sign-out-alt"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div class="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a href="{{route('admin.home')}}"> <img alt="image" src="/assets/images/logo/Mojan.svg" class="header-logo" />
            </a>
          </div>
          <ul class="sidebar-menu">
            <li class="dropdown active">
              <a href="{{route('admin.home')}}" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
            </li>
            <li class="menu-header">Blog</li>
            <li class="dropdown">
              <a href="#" class="menu-toggle nav-link has-dropdown"><i
                  data-feather="list"></i><span>Category</span></a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="{{route('admin.categories.index')}}">View all Categories</a></li>
                <li><a class="nav-link" href="{{route('admin.categories.create')}}">Add Category</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="menu-toggle nav-link has-dropdown"><i
                  data-feather="bookmark"></i><span>Products</span></a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="{{route('admin.posts.index')}}">View all Products</a></li>
                <li><a class="nav-link" href="{{route('admin.posts.create')}}">Add Product</a></li>
              </ul>
            </li>

            <li class="menu-header">Work</li>
             <li class="dropdown">
              <a href="#" class="menu-toggle nav-link has-dropdown"><i
                  data-feather="gitlab"></i><span>Portfolio</span></a>
                <ul class="dropdown-menu">
                   <li><a class="nav-link" href="{{route('admin.works.index')}}">View all Projects</a></li>
                <li><a class="nav-link" href="{{route('admin.works.create')}}">Add Project</a></li>
              </ul>
            </li>
             {{-- <li class="dropdown">
              <a href="#" class="menu-toggle nav-link has-dropdown"><i
                  data-feather="globe"></i><span>Clients</span></a>
                <ul class="dropdown-menu">
                   <li><a class="nav-link" href="{{route('admin.works.index')}}">View all Clients</a></li>
                <li><a class="nav-link" href="{{route('admin.works.create')}}">Add Client</a></li>
              </ul>
            </li>
             --}}


            <li class="menu-header">Media</li>
            <li class="dropdown">
              <a href="#" class="menu-toggle nav-link has-dropdown"><i
                  data-feather="user"></i><span>Users</span></a>
              <ul class="dropdown-menu">
                <li><a class="nav-link" href="{{route('admin.users.index')}}">View all Users</a></li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
      <!-- Main Content -->
      <div class="main-content">
       {{$slot}}
      </div>
      <footer class="main-footer">
        <div class="footer-left">
          <a href="templateshub.net">Amir-ali-basic</a></a>
        </div>
        <div class="footer-right">
        </div>
      </footer>
    </div>
  </div>
  {{-- @else
<p>U are not able to come here</p>
    @endif --}}
  <!-- General JS Scripts -->
  <script src="/assets/admin/js/app.min.js"></script>
  <!-- JS Libraies -->
  <script src="/assets/admin/bundles/apexcharts/apexcharts.min.js"></script>
  <!-- Page Specific JS File -->
  <script src="/assets/admin/js/page/index.js"></script>
  <!-- Template JS File -->
  <script src="/assets/admin/js/scripts.js"></script>
  <!-- Custom JS File -->
  <script src="/assets/admin/js/custom.js"></script>
  <!--Ck editor -->
  <script>
          CKEDITOR.replace( 'editor' );
  </script>
<script>
  let imgInput = document.getElementById('image-upload');
  let prevewDiv = document.getElementById('image-preview');
  src = '';
  imgInput.onchange = e =>{
    const [file] = imgInput.files;
    if(file){
      src= URL.createObjectURL(file);
    }
    prevewDiv.style.backgroundImage= `url('${src}')`;
    prevewDiv.style.backgroundSize= 'contain';
    prevewDiv.style.backgroundRepeat= 'no-repeat';




    console.log(src);
  }
</script>  

</body>
</html>