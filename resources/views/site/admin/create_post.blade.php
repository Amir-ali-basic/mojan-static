<x-layouts.admin>
    <section class="section">
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    @include('site.partials.messages')
                    <div class="card">
                        <div class="card-header">
                            <h4>Write Your Post</h4>
                        </div>
                        <form action="{{route('admin.posts.store')}}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                @foreach($languages as $lang)
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Title {{ strtoupper($lang->code) }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <input type="text" name="{{ "title.$lang->code" }}" class="form-control">
                                        @error("title.$lang->code")
                                        <span class='error text-danger'>{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                                @endforeach
                                <div class="form-group row mb-4">
                                    <label
                                        class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Category</label>
                                    <div class="col-sm-12 col-md-7">
                                        <select name="category_id" class="form-control selectric">
                                            @if ($categories->count() > 0)
                                                <option value="">Select post category</option>
                                                @foreach ($categories as $category )
                                                    <option value="{{$category->id}}">{{$category->title}}</option>
                                                @endforeach

                                            @else
                                                Please create atleast one category first
                                            @endif
                                        </select>
                                        @error('category_id')
                                        <span class='error text-danger'>{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content {{ $lang->code }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <textarea name='{{ "desc$lang->code" }}' id='editor' class="summernote-simple"></textarea> <br>
                                        @error("desc$lang->code")
                                        <span class='error text-danger'>{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                                {{-- TODO: Samo otkomentarisati i dodati jos jedan editor u .js fajl, store i update su napravljeni --}}
                                {{--@foreach($languages as $lang)
                                    <div class="form-group row mb-4">
                                        <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content {{ $lang->code }}</label>
                                        <div class="col-sm-12 col-md-7">
                                            <textarea name='{{ "desc$lang->code" }}' id='editor' class="summernote-simple"></textarea> <br>
                                            @error("desc$lang->code")
                                            <span class='error text-danger'>{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>
                                @endforeach--}}

                                <div class="form-group row mb-4">
                                    <label
                                        class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Thumbnail</label>
                                    <div class="col-sm-12 col-md-7">
                                        <div id="image-preview" class="image-preview">
                                            <label for="image-upload" id="image-label">Choose File</label>
                                            <input type="file" name="image" id="image-upload"/>
                                            @error('image')
                                            <span class='error text-danger'>{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                {{-- <div class="form-group row mb-4">
                                   <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Thumbnail</label>
                                   <div class="col-sm-12 col-md-7">
                                     <div id="image-preview" class="image-preview">
                                       <label for="images-upload" id="image-label">Choose File</label>
                                       <input type="file[]" name="images_post" id="images-upload" />
                                       @error('image')
                                      <span class='error text-danger'>{{$message}}</span>
                                     @enderror
                                     </div>
                                   </div>
                                 </div> --}}

                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Images</label>
                                    <div class="col-sm-12 col-md-7">
                                        <div id="image-preview2" class="image-preview2">
                                            <label for="image-upload" id="image-label">Choose File</label>
                                            <input type="file" name="images[]" id="image-upload" multiple/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <div class="col-sm-12 col-md-7">
                                        <input type="number" name="user_id" value="{{auth()->id()}}" hidden/>
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                                    <div class="col-sm-12 col-md-7">
                                        <button class="btn btn-primary">Create Post</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>
</x-layouts.admin>
