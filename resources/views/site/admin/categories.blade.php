<x-layouts.admin>
        <section class="section">
          <div class="section-body">
            <div class="row">
              <div class="col-12">

                <div class="card mb-0">
                  <div class="card-body">
                    <ul class="nav nav-pills">
                      <li class="nav-item">
                        <a class="nav-link active" href="{{route("admin.categories.index")}}">All <span class="badge badge-white">{{$categories->count()}}</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="{{route("admin.categories.trashed")}}">Trash <span class="badge badge-primary">{{$trashed->count()}}</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                @include('site.partials.messages')

                <div class="card">
                  <div class="card-header">
                    <h4>All Categories</h4>
                  </div>
                  <div class="card-body">
                    <div class="float-right">
                      <form>
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search">
                          <div class="input-group-append">
                            <button class="btn btn-primary"><i class="fas fa-search"></i></button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="clearfix mb-3"></div>
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <tr>
                          <th>Title</th>
                          <th>Created At</th>
                        </tr>
                        @if($categories->count() > 0)
                         @foreach ( $categories as $category )
                         <tr>

                          {{-- <td>
                            <a href="#">
                              <img alt="image" src="assets/img/users/user-1.png" class="rounded-circle" width="35"
                                data-toggle="title" title="">
                              <span class="d-inline-block ml-1">Cara Stevens</span>
                            </a>
                          </td> --}}
                          <td>{{$category->title}}
                            <div class="table-links d-flex">
                              <a href="{{route('admin.categories.edit', $category->id)}}">Edit</a>
                              <div class="bullet"></div>
                              <form action="{{route('admin.categories.destroy', $category->id)}}" method="POST">
                               @method('DELETE')
                               @csrf
                              <input type="submit" class="fake-btn" value="Trash">
                              </form>

                             </div>
                          </td>
                          <td>{{$category->created_at}}</td>
                        </tr>
                         @endforeach
                        @else
                         <h1> Categories not found in the database</h1>
                        @endif

                      </table>
                    </div>
                    <div class="float-right">
                      <nav>
                        <ul class="pagination">
                         {{$categories->links('pagination::bootstrap-4')}}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</x-layouts.admin>