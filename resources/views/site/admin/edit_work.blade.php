<x-layouts.admin>
        <section class="section">
          <div class="section-body">
            <div class="row">
              <div class="col-12">
                @include('site.partials.messages')
                <div class="card">
                  <div class="card-header">
                    <h4>Show the world your work</h4>
                  </div>
                  <form action="{{route('admin.works.store')}}" method="POST" enctype="multipart/form-data">
                   @csrf
                   <div class="card-body">
                     <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Title</label>
                       <div class="col-sm-12 col-md-7">
                         <input type="text" name="title" class="form-control" value="{{$works->title}}">
                       </div>
                     </div>
                     
                     <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Category</label>
                       <div class="col-sm-12 col-md-7">
                        <select name="author" id="">
                         <option value="1">1</option>
                         <option value="11">11</option>
                        </select>
                       </div>
                     </div>
                     <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                       <div class="col-sm-12 col-md-7">
                         <textarea name='body' id='editor' class="summernote-simple">{{$works->body}}</textarea> <br>
                        </div>
                       </div>
                     <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Thumbnail</label>
                       <div class="col-sm-12 col-md-7">
                         <div id="image-preview" class="image-preview">
                           <label for="image-upload" id="image-label">Choose File</label>
                           <input type="file" name="cover" id="image-upload" />
                         </div>
                       </div>
                     </div>
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
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                       <div class="col-sm-12 col-md-7">
                         <button class="btn btn-primary">Add work</button>
                       </div>
                     </div>
                   </div>
                  </form>
                  <div class="col-lg-3">
                   <p>Cover:</p>
                   <form action="/deletecover/{{$works->id}}" method="post">
                   <button class="btn text-danger">x</button>
                   @csrf
                   @method('delete')
                  </form>
                   <img src="/cover/{{$works->cover}}" class="img-responsive" width="200px" alt="">
                   <br>

                   <p>Images:</p>
                   @foreach ($works->images as $img )
                   <form action="/deletecover/{{$img->id}}" method="post">
                   <button class="btn text-danger">x</button>
                   @csrf
                   @method('delete')
                  </form>
                    
                   <img src="/images/{{$img->image}}" class="img-responsive" width="200px" alt="">
                   @endforeach

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</x-layouts.admin>