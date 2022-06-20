<x-layouts.admin>
    <section class="section">
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    @include('site.partials.messages')
                    <div class="card">
                        <div class="card-header">
                            <h4>Update Your Post</h4>
                        </div>
                        <form action="{{route('admin.posts.update',$post->id)}}" method="POST"
                              enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                @foreach($languages as $lang)
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Title {{ strtoupper($lang->code) }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <input type="text" name="{{ "title.$lang->code" }}" class="form-control" value="{{ $post->getTranslation('title', $lang->code) }}">
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
                                            @if ($post->count() > 0)
                                                <option value="{{$post->title}}">Select post category</option>
                                                @foreach ($categories as $category )
                                                    <option value="{{$category->id}}" @if($category->id == $post->category_id) selected @endif>{{$category->title}}</option>
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
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                                    <div class="col-sm-12 col-md-7">
                                        <textarea name='desc' id='editor' class="summernote-simple"
                                                  value="{{$post->desc}}">{!!$post->desc!!}</textarea> <br>
                                        @error('desc')
                                        <span class='error text-danger'>{{$message}}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label
                                        class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Thumbnail</label>
                                    <div class="col-sm-12 col-md-7">
                                        <div id="image-preview" class="image-preview">
                                            <label for="image-upload" id="image-label">Choose File</label>
                                            <input type="file" name="image"/>
                                            @error('image')
                                            <span class='error text-danger'>{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <div class="col-sm-12 col-md-7">
                                        <input type="number" name="user_id" value="1" hidden/>
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                                    <div class="col-sm-12 col-md-7">
                                        <button class="btn btn-primary">Update Post</button>
                                    </div>
                                </div>
                            </div>
                            <input type="number" name="user_id" value="{{$post->user_id}}" hidden>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-layouts.admin>
