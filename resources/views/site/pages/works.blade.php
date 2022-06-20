
         
@extends('layouts.main')
@section('content')
<style>
	.contain{
background-size: contain !important;
}
	</style>


		<!-- main start -->
		<main class="js-animsition-overlay" data-animsition-overlay="true">
			<!-- pos-rel start -->
			<section class="pos-rel section-bg-dark-1">
				<!-- follow-slider-bg start -->
				<div class="js-parallax-slider-2-bg follow-slider-bg one-page-slider">
					<!-- swiper-wrapper start -->
					<div class="swiper-wrapper">
						<!-- swiper-slide start -->
            @foreach ($works as $work )
              
						<div class="swiper-slide">
							<div class="swiper-parallax-bg-box" data-swiper-parallax-y="50%">
								<div class="bg-img-cover height-100perc contain"style="background-image: url('/cover/{{$work->cover}}');"></div>

								<div class="bg-overlay-black"></div>
							</div>
						</div><!-- swiper-slide end -->
            @endforeach





					</div><!-- swiper-wrapper end -->
				</div><!-- follow-slider-bg end -->

				<!-- js-parallax-slider-2 start -->
				<div class="js-parallax-slider-2">
					<!-- swiper-wrapper start -->
					<div class="swiper-wrapper">
						<!-- swiper-slide start -->
            @foreach ( $works as $work )
              
						<h2 class="swiper-slide slide-opacity-anim pos-rel d-flex flex-center-center">
							
							<span class="d-block container small">
								<p class="body-text-s text-white-black margin-top-20 js-animsition-link slider-preloader-anim">{!! $work->link !!}</p>
								<a href="" class="headline-xxl js-pointer-large js-animsition-link d-inline-block slider-preloader-anim">{{$work->title}}</a>

							</span>
						</h2><!-- swiper-slide end -->
						
            @endforeach










					</div><!-- swiper-wrapper end -->

					<!-- swiper-button-prev start -->
					<div class="swiper-button-prev-box after-preloader-anim">
						<div class="anim-fade">
							<div class="swiper-button-prev"></div>
						</div>
					</div><!-- swiper-button-prev end -->
					<!-- swiper-button-next start -->
					<div class="swiper-button-next-box after-preloader-anim">
						<div class="anim-fade tr-delay-03">
							<div class="swiper-button-next"></div>
						</div>
					</div><!-- swiper-button-next end -->

					<!-- swiper-pagination start -->
					<div class="pagination-box after-preloader-anim">
						<div class="anim-fade tr-delay-06">
							<div class="swiper-pagination counter-pagination"></div>
						</div>
					</div><!-- swiper-pagination end -->
				</div><!-- js-parallax-slider-2 end -->
			</section><!-- pos-rel end -->
		</main><!-- main end -->
<script>
  
</script>
@endsection