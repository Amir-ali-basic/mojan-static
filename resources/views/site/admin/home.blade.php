<x-layouts.admin>
        <section class="section">
          <div class="row ">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15">Categories</h5>
                          <h2 class="mb-3 font-18">{{$categoriesCount}}</h2>
                          {{-- <p class="mb-0"><span class="col-green">10%</span> Increase</p> --}}
                        </div>
                      </div>
                      {{-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="/assets/images/categorybanner.svg" width="60%" alt="">
                        </div>
                      </div> --}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15">Products</h5>
                          <h2 class="mb-3 font-18">{{$postsCount}}</h2>
                          {{-- <p class="mb-0"><span class="col-orange">09%</span> Decrease</p> --}}
                        </div>
                      </div>
                      {{-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="/assets/images/postsbanner2.svg" width="60%" alt="">
                        </div>
                      </div> --}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15">Works</h5>
                          <h2 class="mb-3 font-18">{{$worksCount}}</h2>
                          {{-- <p class="mb-0"><span class="col-green">18%</span>
                            Increase</p> --}}
                        </div>
                      </div>
                      {{-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="/assets/images/workbanner.svg" width="60%" alt="">
                        </div>
                      </div> --}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15">Users</h5>
                          <h2 class="mb-3 font-18">{{$usersCount}}</h2>
                          {{-- <p class="mb-0"><span class="col-green">42%</span> Increase</p> --}}
                        </div>
                      </div>
                      {{-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="/assets/images/usersbanner.svg" width="60%" alt="">
                        </div>
                      </div> --}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-md-6 col-lg-12 col-xl-6">
              <!-- Support tickets -->
              <div class="card">
                <div class="card-header">
                  <h4>Latest Products</h4>
                </div>
                <div class="card-body">
                  @if ($recentPosts->count() > 0)
                  @foreach ($recentPosts as $post )
      
                  <div class="support-ticket media pb-1 mb-3">
                    {{-- <img src="assets/images/users/user-1.png" class="user-img mr-2" alt=""> --}}
                    <img src="/storage/posts/{{$post->image}}" width="120px" alt="">
                    <div class="media-body ml-3">
                      <div class="badge badge-pill badge-success mb-1 float-right">{{$post->category->title}}</div>
                      <span class="font-weight-bold">#{{$post->id}}</span>
                      <a href="javascript:void(0)">{{$post->title}}</a>
                      <p class="my-1">{!! Str::limit($post->desc,50)!!}</p>
                      <small class="text-muted">Created by <span class="font-weight-bold font-13">{{$post->user->name}}</span>
                        &nbsp;&nbsp;{{$post->created_at->diffForHumans()}}</small>
                    </div>
                  </div>
                  @endforeach               
                  @else
                    Posts not found
                  @endif


                </div>
                <a href="{{route("admin.posts.index")}}" class="card-footer card-link text-center small ">View
                  All</a>
              </div>
              <!-- Support tickets -->
            </div>
            <div class="col-md-6 col-lg-12 col-xl-6">
              <div class="card">
                <div class="card-header">
                  <h4>Recent Categories</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Category Title</th>
                          <th>Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        @foreach ($recentCategories as $cat )
                          
                        <tr>
                          <td>{{$cat->id}}</td>
                          <td>{{$cat->title}} </td>
                          <td>{{$cat->created_at->diffForHumans()}}</td>
                        </tr>
                        @endforeach

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
             <div class="col-md-12 col-lg-12 col-xl-12">
              <div class="card">
                <div class="card-header">
                  <h4>Recent projects</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Client</th>
                          <th>Link</th>
                          <th>Description</th>
                          <th>Cover</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        @foreach ($recentWork as $work )
                          
                        <tr>
                          <td>{{$work->id}}</td>
                          <td>{{$work->title}}</td>
                          <td>{{$work->author}}</td>
                          <td>{{$work->client}}</td>
                          <td>{{$work->link}}</td>
                          <td>{{$work->body}}</td>
                          <td><img src="/cover/{{$work->cover}}" alt="" width="120px" class="m-2"></td>
                          <td>{{$work->date}}</td>



                        </tr>
                        @endforeach

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="settingSidebar">
          <a href="javascript:void(0)" class="settingPanelToggle"> <i class="fa fa-spin fa-cog"></i>
          </a>
          <div class="settingSidebar-body ps-container ps-theme-default">
            <div class=" fade show active">
              <div class="setting-panel-header">Setting Panel
              </div>
              <div class="p-15 border-bottom">
                <h6 class="font-medium m-b-10">Select Layout</h6>
                <div class="selectgroup layout-color w-50">
                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="1" class="selectgroup-input-radio select-layout" checked>
                    <span class="selectgroup-button">Light</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="2" class="selectgroup-input-radio select-layout">
                    <span class="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <h6 class="font-medium m-b-10">Sidebar Color</h6>
                <div class="selectgroup selectgroup-pills sidebar-color">
                  <label class="selectgroup-item">
                    <input type="radio" name="icon-input" value="1" class="selectgroup-input select-sidebar">
                    <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Light Sidebar"><i class="fas fa-sun"></i></span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="icon-input" value="2" class="selectgroup-input select-sidebar" checked>
                    <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Dark Sidebar"><i class="fas fa-moon"></i></span>
                  </label>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <h6 class="font-medium m-b-10">Color Theme</h6>
                <div class="theme-setting-options">
                  <ul class="choose-theme list-unstyled mb-0">
                    <li title="white" class="active">
                      <div class="white"></div>
                    </li>
                    <li title="cyan">
                      <div class="cyan"></div>
                    </li>
                    <li title="black">
                      <div class="black"></div>
                    </li>
                    <li title="purple">
                      <div class="purple"></div>
                    </li>
                    <li title="orange">
                      <div class="orange"></div>
                    </li>
                    <li title="green">
                      <div class="green"></div>
                    </li>
                    <li title="red">
                      <div class="red"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <div class="theme-setting-options">
                  <label class="m-b-0">
                    <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input"
                      id="mini_sidebar_setting">
                    <span class="custom-switch-indicator"></span>
                    <span class="control-label p-l-10">Mini Sidebar</span>
                  </label>
                </div>
              </div>
              <div class="p-15 border-bottom">
                <div class="theme-setting-options">
                  <label class="m-b-0">
                    <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input"
                      id="sticky_header_setting">
                    <span class="custom-switch-indicator"></span>
                    <span class="control-label p-l-10">Sticky Header</span>
                  </label>
                </div>
              </div>
              <div class="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a href="#" class="btn btn-icon icon-left btn-primary btn-restore-theme">
                  <i class="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
</x-layouts.admin>