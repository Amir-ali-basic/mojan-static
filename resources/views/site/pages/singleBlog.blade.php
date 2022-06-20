
         
@extends('layouts.main')
@section('content')
		{{-- <link href="/assets/css/plugins.css" rel="stylesheet" type="text/css">
		<link href="/assets/css/style.css" rel="stylesheet" type="text/css"> --}}
  <style>
   .img-helper{
    width: 450px !important;
   }
  </style>
  
		<main class="js-animsition-overlay" data-animsition-overlay="true">
			<!-- lines-section start -->
			<section id="up" class="lines-section pos-rel anim-lines js-parallax-bg" style="background-image:url(/storage/posts/{{$post->image}})">
				<!-- bg-overlay -->
				<div class="bg-overlay-black"></div>
				<!-- lines-container start -->
				<div class="lines-container pos-rel anim-lines flex-min-height-100vh">
					<div class="padding-top-bottom-120 container small after-preloader-anim">
						<!-- title start -->
						<div class="text-center">
							<h2 class="headline-xl anim-fade">{{$post->title}}</h2>
						</div><!-- title end -->

						<!-- description start -->
						{{-- <div class="flex-container description">
							<div class="four-columns column-50-100 padding-top-1 text-center">
								<span class="hidden-box d-inline-block">
									<span class="subhead-xxs anim-reveal">{{$post->category->title}}</span>
								</span>
							</div>
							<div class="four-columns column-50-100 padding-top-1 text-center">
								<span class="hidden-box d-inline-block">
									<span class="subhead-xxs anim-reveal tr-delay-02">In: Culture</span>
								</span>
							</div>
							<div class="four-columns column-50-100 padding-top-1 text-center">
								<span class="hidden-box d-inline-block">
									<span class="subhead-xxs anim-reveal tr-delay-04">2020, March 15</span>
								</span>
							</div>
						</div><!-- description end --> --}}
					</div>
				</div><!-- lines-container end -->
			</section><!-- lines-section end -->

			<!-- post start -->
			<div id="down" class="lines-section pos-rel black-lines section-bg-light-1" data-midnight="black">
				<!-- lines-container start -->
				<div class="lines-container pos-rel no-lines padding-top-bottom-120">
					<!-- entry-content start -->
					<article>
						<div class="container small">
							<h2 class="headline-s text-color-black text-center">{{$post->title}}</h2>
							<p class="body-text-s text-color-black margin-top-20">opis proizvoda{!! $post->desc !!}</p>
						</div>
						<div class="padding-top-30 d-flex justify-content-center">
							<div class="pos-rel">
								<img src="/storage/posts/{{$post->image}}" class="img-helper" alt="Post">
								<img src="/storage/posts/{{$post->post_images}}" class="img-helper" alt="Post">
        
								<!-- bg-overlay -->
							</div>
							<p class="body-text-s text-color-black margin-top-20">{!! $post->desc !!}</p>
						</div>

					</article><!-- entry-content end -->


		</main><!-- main end -->

    		<script src="/assets/js/plugins.js"></script>
		<script src="/assets/js/footer-reveal.js"></script>
<script src="/assets/js/main.js"></script>

		<script src="/assets/js/footer-reveal_init.js"></script>
@endsection