                      
@extends('layouts.main')

@section('content')
      <div class="portfolio-single-wrap section">
          <div class="portfolio-single-inner">
            <div class="container">
              <div id="quote">{{$works->title}}</div>
              <h2 class="heading-portfolio-single-h2">{{$works->title}}</h2>
              <div class="row justify-content-between align-items-stretch">
                <div class="col-lg-8">
                  <p>
                    <img
                      src="/storage/cover/{{$works->cover}}"
                      alt="Image"
                      class="img-fluid"
                    />
                  </p>

                </div>
                <div class="col-lg-4 pl-lg-5">
                  <div class="sticky">
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="detail-v1">
                          <p>
                            {!!$works->body!!}
                          </p>
                        </div>
                        <hr />
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="detail-v1">
                          <span class="detail-label">Project Date</span>
                          <span class="detail-val">{{$works->date}}</span>
                        </div>
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="detail-v1">
                          <span class="detail-label">Category</span>
                          <span class="detail-val"
                            ><a href="#">{{$works->author}}</a>
                        </div>
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="detail-v1">
                          <span class="detail-label">Client</span>
                          <span class="detail-val">{{$works->client}}</span>
                        </div>
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="detail-v1">
                          <span class="detail-label">Website</span>
                          <span class="detail-val"
                            ><a href="{{$works->link}}">{{$works->link}}</a></span
                          >
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        @endsection
        <script>

        </script>