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
                         <input type="text" name="title" class="form-control">
                       </div>
                     </div>
                     
                     <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Category</label>
                       <div class="col-sm-12 col-md-7">
                        <select name="author" id="">
                         <option value="Web">web</option>
                         <option value="mobile">mobile</option>
                         <option value="design">design</option>
                         <option value="brand">brand</option>

                        </select>
                       </div>
                     </div>
                      <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Project date</label>
                       <div class="col-sm-12 col-md-7">
                         <input type="text" name="date" class="form-control">
                       </div>
                     </div>
                       <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Client name</label>
                       <div class="col-sm-12 col-md-7">
                         <input type="text" name="client" class="form-control">
                       </div>
                     </div>
                      <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Website link</label>
                       <div class="col-sm-12 col-md-7">
                         <input type="text" name="link" class="form-control">
                       </div>
                     </div>
                     <div class="form-group row mb-4">
                       <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                       <div class="col-sm-12 col-md-7">
                         <textarea name='body' id='editor' class="summernote-simple"></textarea> <br>
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
                </div>
              </div>
            </div>
          </div>
        </section>
</x-layouts.admin>