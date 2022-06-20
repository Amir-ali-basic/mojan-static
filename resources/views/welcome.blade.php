
@extends('layouts.main')
@section('content')

	<body class="preloader cursor-anim-enable dark-nav">
		<!-- preloader-loading start -->
		<div class="preloader__logoload-box ">
			<img class="preloader__logo " src="assets/images/logo/Mojan.svg" alt="logo">
			<div class="preloader__pulse"></div>
		</div><!-- preloader-loading end -->

		<!-- pointer start -->
		<div class="pointer js-pointer" id="js-pointer">
			<i class="pointer__inner fas fa-long-arrow-alt-right"></i>
			<i class="pointer__inner fas fa-search"></i>
			<i class="pointer__inner fas fa-link"></i>
		</div><!-- pointer end -->

		<!-- to top btn start -->
		<a href="#up" class="scroll-to-btn js-headroom js-midnight-color js-smooth-scroll js-pointer-large">
			<span class="scroll-to-btn__box">
				<span class="scroll-to-btn__arrow"></span>
			</span>
		</a><!-- to top btn end -->

		<!-- scroll down btn start -->
		<a href="#down" class="scroll-to-btn to-down js-headroom js-midnight-color js-smooth-scroll js-pointer-large js-scroll-btn">
			<span class="scroll-to-btn__box">
				<span class="scroll-to-btn__arrow"></span>
			</span>
		</a><!-- scroll down btn end -->



		<!-- main start -->
		<main class="js-animsition-overlay" data-animsition-overlay="true">
			<!-- home slider start -->
			<section id="up" class="pos-rel section-bg-dark-1 js-home-slider fullscreen-slider">
				<!-- swiper-wrapper start -->
				<div class="swiper-wrapper">
					<!-- swiper-slide start -->
					<div class="swiper-slide">
						<!-- slide-bg -->
						<div class="js-parallax-slide-bg bg-img-cover" style="background-image:url(assets/images/coverv1.jpg)"></div>
						<!-- bg-overlay -->
						<div class="bg-overlay-black"></div>

						<!-- content start -->
						<div class="flex-min-height-100vh pos-rel" data-swiper-parallax-x="30%">
							<div class="container padding-top-bottom-120">
								<h2 class="headline-xl">
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-02">{{__('msg.welcome')}}</span>
									</span>
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-03">{{__('msg.welcome2')}}</span>
									</span>
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-04">Mojan & Obuk`o</span>
									</span>
								</h2>
								<div class="margin-top-30 anim-fade tr-delay-08">
									<a href="#" class="border-btn js-pointer-large">
										<span class="border-btn__inner">{{__('msg.readmore')}}</span>
										<span class="border-btn__lines-1"></span>
										<span class="border-btn__lines-2"></span>
									</a>
								</div>
							</div>
						</div><!-- content end -->
					</div><!-- swiper-slide end -->

					<!-- swiper-slide start -->
					{{-- <div class="swiper-slide">
						<!-- slide-bg -->
						<div class="js-parallax-slide-bg bg-img-cover" style="background-image:url(assets/images/projects/pexels/woman-in-black-sexy-top-2825034.jpg)"></div>
						<!-- bg-overlay -->
						<div class="bg-overlay-black"></div>

						<!-- content start -->
						<div class="flex-min-height-100vh pos-rel" data-swiper-parallax-x="30%">
							<div class="container small text-center padding-top-bottom-120">
								<h2 class="headline-xl">
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-02">We’r Provided</span>
									</span>
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-03">
											<span class="text-color-red">Best</span> Digital
										</span>
									</span>
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-04 text-color-red">Services</span>
									</span>
								</h2>
								<div class="margin-top-30 anim-fade tr-delay-08">
									<a href="#" class="border-btn js-pointer-large">
										<span class="border-btn__inner">Read more</span>
										<span class="border-btn__lines-1"></span>
										<span class="border-btn__lines-2"></span>
									</a>
								</div>
							</div>
						</div><!-- content end -->
					</div><!-- swiper-slide end --> --}}

					<!-- swiper-slide start -->
					{{-- <div class="swiper-slide">
						<!-- slide-bg -->
						<div class="js-parallax-slide-bg bg-img-cover" style="background-image:url(assets/images/projects/black-bike/josh-nuttall-pIwu5XNvXpk-unsplash.jpg)"></div>
						<!-- bg-overlay -->
						<div class="bg-overlay-black"></div> --}}

						<!-- content start -->
						{{-- <div class="flex-min-height-100vh pos-rel" data-swiper-parallax-x="30%">
							<div class="container small padding-top-bottom-120">
								<h2 class="headline-xl">
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-02">Best Solutions</span>
									</span>
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-03">& Ideas for</span>
									</span>
									<span class="hidden-box d-block">
										<span class="anim-slide tr-delay-04">Your Business</span>
									</span>
								</h2>
								<div class="margin-top-30 anim-fade tr-delay-08">
									<a href="#" class="border-btn js-pointer-large">
										<span class="border-btn__inner">Read more</span>
										<span class="border-btn__lines-1"></span>
										<span class="border-btn__lines-2"></span>
									</a>
								</div>
							</div>
						</div><!-- content end --> --}}
					</div><!-- swiper-slide end -->
				</div><!-- swiper-wrapper end -->

				<!-- swiper-button-prev start -->
				{{-- <div class="swiper-button-prev-box fullscreen-slider-arrow after-preloader-anim">
					<div class="anim-fade">
						<div class="swiper-button-prev"></div>
					</div>
				</div><!-- swiper-button-prev end -->
				<!-- swiper-button-next start -->
				<div class="swiper-button-next-box fullscreen-slider-arrow after-preloader-anim">
					<div class="anim-fade tr-delay-06">
						<div class="swiper-button-next"></div>
					</div>
				</div><!-- swiper-button-next end --> --}}

				<!-- swiper-pagination start -->
				{{-- <div class="pagination-box fullscreen-slider-pagination after-preloader-anim">
					<div class="anim-fade tr-delay-03">
						<div class="swiper-pagination counter-pagination"></div>
					</div>
				</div><!-- swiper-pagination end --> --}}
			</section><!-- home slider end -->

			<!-- about us start -->
			<section id="down" class="pos-rel section-bg-dark-2">
				<!-- pos-rel start -->
				<div class="pos-rel padding-top-bottom-120">
					<!-- flex-container start -->
					<div class="container flex-container padding-bottom-70">
						<!-- column start -->
						<div class="six-columns padding-bottom-20">
							<!-- title start -->
							<h2 class="column-r-margin-10 headline-m js-scrollanim">
								<span class="hidden-box d-block">
									<span class="anim-slide">
										{{__('msg.moreabout')}}<span class="text-color-red"> Mojan </span>
									</span>
								</span>
								<span class="hidden-box d-block">
									<span class="anim-slide tr-delay-01 text-color-red">DOO</span>
								</span>
							</h2><!-- title end -->
						</div><!-- column end -->

						<!-- column start -->
						 <div class="six-columns padding-bottom-20">
							<div class="column-l-r-margin-10">
								<p class="body-text-s anim-text-reveal js-scrollanim">{{__('msg.about10')}}</p>
								

								<!-- list start -->
								<ul class="list text-color-dadada margin-top-30 js-scrollanim">
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide">{{__('msg.product1')}}</div>
									</li>
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-01">{{__('msg.product2')}}</div>
									</li>
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-02">{{__('msg.product3')}}</div>
									</li>
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-03">{{__('msg.product4')}}</div>
									</li>
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-04">{{__('msg.product5')}}</div>
									</li>
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-04">{{__('msg.product6')}}</div>
									</li>
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-04">{{__('msg.product7')}}</div>
									</li>
									<li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-04">{{__('msg.product8')}}</div>
									</li>
									<!--<li class="list__item red dot hidden-box">-->
									<!--	<div class="subhead-xxs anim-slide tr-delay-05">{{__('msg.product6')}}</div>-->
									<!--</li>-->
									{{-- <li class="list__item red dot hidden-box">
										<div class="subhead-xxs anim-slide tr-delay-06">{{__('msg.product1')}}</div>
									</li> --}}
								</ul><!-- list end -->
							</div>
						</div><!-- column end -->
					</div><!-- flex-container end -->
					

					<!-- js-infinite-slider start -->
					<div class="js-infinite-slider about-slider hidden-box">
						<!-- swiper-wrapper start -->
						<div class="swiper-wrapper">
							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/image_6483441 (3).JPG" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/IMG_8211 (1).jpeg" alt="About us">
								<img class="padding-top-20" src="assets/images/about/about_slider/IMG_8189.jpeg" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/IMG_8151.jpeg" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/IMG_8195.jpeg" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/image_6487327 (1).JPG" alt="About us">
								<img class="padding-top-20" src="assets/images/about/about_slider/IMG_8213 (1).jpeg" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/IMG_8186.jpeg" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/IMG_8168.jpeg" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/IMG_8189.jpeg" alt="About us">
								<img class="padding-top-20" src="assets/images/about/about_slider/IMG_8213 (1).jpeg" alt="About us">
							</div><!-- swiper-slide end -->

							<!-- swiper-slide start -->
							<div class="swiper-slide">
								<img src="assets/images/about/about_slider/IMG_8146.jpeg" alt="About us">
							</div><!-- swiper-slide end -->
						</div><!-- swiper-wrapper end -->
					</div><!-- js-infinite-slider end -->
				</div><!-- pos-rel end -->
			</section><!-- about us end -->


			<!-- clients start -->
			<section class="pos-rel section-bg-dark-1">
				<!-- pos-rel start -->
				<div class="pos-rel flex-min-height-100vh">
					<!-- container start -->
					<div class="padding-top-bottom-120 container">
						<!-- title start -->
						<h2 class="headline-l js-scrollanim">
							<span class="hidden-box d-block">
								<span class="anim-slide">
									<span class="text-color-red">{{__('msg.zadovoljni')}}</span>
								</span>
							</span>
							<span class="hidden-box d-block">
								<span class="anim-slide tr-delay-01">{{__('msg.klijenti')}}</span>
							</span>
							<!--<span class="hidden-box d-block">-->
							<!--	<span class="anim-slide tr-delay-02">With</span>-->
							<!--</span>-->
						</h2><!-- title end -->

						<!-- clients-lines start -->
						<div class="clients-lines padding-top-90">
							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/ac viva.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/ac viva.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/LA VILLA.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/LA VILLA.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/Olive.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/Olive.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/Aman_Resorts_logo.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/Aman_Resorts_logo.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/celebic.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/celebic.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/Bianca logo.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/Bianca logo.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/dukley.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/dukley.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/HOTEL MOSKVA.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/HOTEL MOSKVA.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/KALIA.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/KALIA.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/Kuca hemije.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/Kuca hemije.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<div class="clients-lines__column">
								<div class="clients-lines__inner hover-box pos-rel">
									<img class="client-logo client-hover-out pos-abs pos-center-center" src="assets/images/clients/LogoVujacic.png" alt="clients logo">
									<img class="client-logo client-hover-in pos-abs pos-center-center" src="assets/images/clients/LogoVujacic.png" alt="clients logo">
								</div>
							</div><!-- clients-lines__column end -->

							<!-- clients-lines__column start -->
							<a href="#" class="clients-lines__column js-pointer-large">
								<div class="clients-lines__inner hover-box pos-rel js-scrollanim">
									<div class="padding-left-right-20 subhead-xxs text-center pos-abs pos-center-center">
										<span class="anim-text-double-fill" data-text="{{__('msg.ovo')}}">{{__('msg.ovo')}}</span><br>
										<span class="anim-text-double-fill tr-delay-02" data-text="{{__('msg.mjesto')}}">{{__('msg.mjesto')}}</span><br>
										<span class="anim-text-double-fill tr-delay-04" data-text="{{__('msg.tvoje')}}">{{__('msg.tvoje')}}</span>
									</div>
								<div class="border-left-anim in-10px red"></div>
								<div class="border-top-anim in-10px red"></div>
								<div class="border-right-anim in-10px red"></div>
								<div class="border-bottom-anim in-10px red"></div>
								</div>
							</a><!-- clients-lines__column end -->
						</div><!-- clients-lines end -->
					</div><!-- container end -->
				</div><!-- pos-rel end -->
			</section><!-- clients end -->

			<!-- testimonials start -->
			{{-- <section class="pos-rel section-bg-light-1" data-midnight="black">
				<!-- pos-rel start -->
				<div class="pos-rel flex-min-height-100vh">
					<!-- padding-top-bottom-120 start -->
					<div class="padding-top-bottom-120 width-100perc">
						<!-- title start -->
						<h2 class="headline-xxl text-color-black text-center hidden-box">
							<span class="anim-slide js-scrollanim">Testimonials</span>
						</h2><!-- title end -->

						<!-- js-2-view-slider start -->
						<div class="js-2-view-slider padding-top-bottom-90 hidden-box pos-rel">
							<!-- swiper-wrapper start -->
							<div class="swiper-wrapper js-slider-scroll-anim">
								<!-- swiper-slide start -->
								<div class="swiper-slide slide-scale-anim">
									<div class="margin-left-right-20 padding-left-right-20 padding-top-bottom-40 content-bg-light-2 border-radius-10px">
										<p class="margin-bottom-30 quote quote_bottom body-text-m text-color-black text-center">Pok pok authentic fashion axe, vegan venmo leggings raclette tousled twee tattooed. Banh mi humblebrag hammock tacos fashion axe aesthetic vegan sustainable taiyaki thundercats jean shorts tousled cloud bread waistcoat kogi. Cloud bread cardigan messenger bag raw.</p>
										<!-- anim-img-scale start -->
										<div class="anim-img-scale testimonials-author border-radius-50perc">
											<img class="anim-img-scale__inner" src="assets/images/testimonials/woman-wearing-white-and-black-shirt-1388888.jpg" alt="author">
										</div><!-- anim-img-scale end -->
										<div class="margin-top-20 text-center">
											<span class="headline-xxxs text-color-black">Lucille Hatcher</span><br>
											<span class="subhead-xxs text-color-888888">Investor</span>
										</div>
									</div>
								</div><!-- swiper-slide end -->

								<!-- swiper-slide start -->
								<div class="swiper-slide slide-scale-anim">
									<div class="margin-left-right-20 padding-left-right-20 padding-top-bottom-40 content-bg-light-2 border-radius-10px">
										<p class="margin-bottom-30 quote quote_bottom body-text-m text-color-black text-center">Pitchfork vaporware hella, vice next level art party subway tile swag portland. Cliche authentic photo booth, seitan sartorial iPhone brooklyn bicycle rights whatever small batch selvage affogato yuccie adaptogen vinyl. Sartorial franzen tacos cardigan, offal gluten-free pour-over.</p>
										<!-- anim-img-scale start -->
										<div class="anim-img-scale testimonials-author border-radius-50perc">
											<img class="anim-img-scale__inner" src="assets/images/testimonials/man-standing-near-building-white-black-turtleneck-shirt-874158.jpg" alt="author">
										</div><!-- anim-img-scale end -->
										<div class="margin-top-20 text-center">
											<span class="headline-xxxs text-color-black">Edward Jordan</span><br>
											<span class="subhead-xxs text-color-888888">Cytotechnologist</span>
										</div>
									</div>
								</div><!-- swiper-slide end -->

								<!-- swiper-slide start -->
								<div class="swiper-slide slide-scale-anim">
									<div class="margin-left-right-20 padding-left-right-20 padding-top-bottom-40 content-bg-light-2 border-radius-10px">
										<p class="margin-bottom-30 quote quote_bottom body-text-m text-color-black text-center">Chambray enamel pin synth shabby chic palo santo. Franzen 90's man bun wayfarers, put a bird on it twee four loko roof party shabby chic kale chips photo booth salvia mixtape lumbersexual. Pug kickstarter hammock unicorn, cardigan ennui celiac roof party. Ramps pitchfork direct.</p>
										<!-- anim-img-scale start -->
										<div class="anim-img-scale testimonials-author border-radius-50perc">
											<img class="anim-img-scale__inner" src="assets/images/testimonials/informal-young-woman-listening-to-music-near-grunge-wall-3771823.jpg" alt="author">
										</div><!-- anim-img-scale end -->
										<div class="margin-top-20 text-center">
											<span class="headline-xxxs text-color-black">Mary Ross</span><br>
											<span class="subhead-xxs text-color-888888">Fashion designer</span>
										</div>
									</div>
								</div><!-- swiper-slide end -->

								<!-- swiper-slide start -->
								<div class="swiper-slide slide-scale-anim">
									<div class="margin-left-right-20 padding-left-right-20 padding-top-bottom-40 content-bg-light-2 border-radius-10px">
										<p class="margin-bottom-30 quote quote_bottom body-text-m text-color-black text-center">Copper mug vexillologist +1 prism iPhone fashion axe portland. Hella quinoa woke blog af umami tacos freegan vinyl snackwave microdosing. Fanny pack direct trade XOXO drinking vinegar. Live-edge kinfolk master cleanse brooklyn meh organic man braid. Actually humblebrag sriracha.</p>
										<!-- anim-img-scale start -->
										<div class="anim-img-scale testimonials-author border-radius-50perc">
											<img class="anim-img-scale__inner" src="assets/images/testimonials/photography-of-guy-wearing-yellow-hoodie-1183266.jpg" alt="author">
										</div><!-- anim-img-scale end -->
										<div class="margin-top-20 text-center">
											<span class="headline-xxxs text-color-black">Dwight Bell</span><br>
											<span class="subhead-xxs text-color-888888">Banquet manager</span>
										</div>
									</div>
								</div><!-- swiper-slide end -->

								<!-- swiper-slide start -->
								<div class="swiper-slide slide-scale-anim">
									<div class="margin-left-right-20 padding-left-right-20 padding-top-bottom-40 content-bg-light-2 border-radius-10px">
										<p class="margin-bottom-30 quote quote_bottom body-text-m text-color-black text-center">Bushwick tumeric slow-carb photo booth letterpress franzen kombucha tumblr listicle cronut waistcoat mustache. Jean shorts tilde swag cray. Microdosing heirloom wayfarers YOLO, church-key tattooed cred blue bottle viral lyft tacos retro. Bespoke drinking vinegar single-origin.</p>
										<!-- anim-img-scale start -->
										<div class="anim-img-scale testimonials-author border-radius-50perc">
											<img class="anim-img-scale__inner" src="assets/images/testimonials/man-standing-on-stairs-1254502.jpg" alt="author">
										</div><!-- anim-img-scale end -->
										<div class="margin-top-20 text-center">
											<span class="headline-xxxs text-color-black">Brian Amos</span><br>
											<span class="subhead-xxs text-color-888888">Health educator</span>
										</div>
									</div>
								</div><!-- swiper-slide end -->
							</div><!-- swiper-wrapper end -->

							<!-- swiper-button-prev start -->
							<div class="swiper-button-prev-box">
								<div class="swiper-button-prev black"></div>
							</div><!-- swiper-button-prev end -->
							<!-- swiper-button-next start -->
							<div class="swiper-button-next-box">
								<div class="swiper-button-next black"></div>
							</div><!-- swiper-button-next end -->

							<!-- swiper-pagination start -->
							<div class="pagination-box">
								<div class="swiper-pagination counter-pagination black"></div>
							</div><!-- swiper-pagination end -->
						</div><!-- js-2-view-slider end -->
					</div><!-- padding-top-bottom-120 end -->
				</div><!-- pos-rel end -->
			</section><!-- testimonials end --> --}}


			{{-- <!-- latest news start -->
			<section class="pos-rel section-bg-light-2" data-midnight="black">
				<!-- pos-rel start -->
				<div class="pos-rel padding-top-bottom-120">
					<!-- container start -->
					<div class="container small">
						<!-- title start -->
						<h2 class="headline-xxl text-color-black text-center hidden-box">
							<span class="anim-slide js-scrollanim">
								From the <span class="text-color-red">Blog</span>
							</span>
						</h2><!-- title end -->

						<!-- blog-entry start -->
						<article class="flex-container flex-align-center padding-top-60">
							<div class="six-columns padding-top-30">
								<a href="post_dont-panic.html" class="d-block hover-box anim-img-reveal js-scrollanim js-pointer-large js-animsition-link">
									<div class="anim-img-reveal__hidden">
										<div class="anim-img-reveal__scale">
											<img class="img-hover-scale" src="assets/images/posts/decor-and-furniture/two-vases-on-table-842950.jpg" alt="Post">
										</div>
									</div>
								</a>
							</div>
							<div class="six-columns padding-top-30">
								<div class="column-l-margin-40 anim-fade js-scrollanim">
									<ul class="list list_row list_margin-30px">
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">By: Nancy Newton</a>
										</li>
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">In: Art</a>
										</li>
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">2020, March 2</a>
										</li>
									</ul>
									<a href="post_dont-panic.html" class="margin-top-bottom-30 d-block js-pointer-large js-animsition-link">
										<h3 class="headline-xxxs text-color-black">
											Home decor and furniture<br>
											stores near me
										</h3>
										<p class="body-text-xs margin-top-20 text-color-black">Plaid retro migas venmo lo-fi ethical artisan fingerstache seitan you probably haven't heard of them fam keffiyeh...</p>
									</a>
									<a href="post_dont-panic.html" class="skew-btn js-pointer-large js-animsition-link">
										<span class="skew-btn__box">
											<span class="skew-btn__content text-color-black">Continue reading</span>
											<span class="skew-btn__arrow black"></span>
										</span>
									</a>
								</div>
							</div>
						</article><!-- blog-entry end -->

						<!-- blog-entry start -->
						<article class="flex-container reverse flex-align-center padding-top-60">
							<div class="six-columns padding-top-30">
								<div class="column-r-margin-40 anim-fade js-scrollanim">
									<ul class="list list_row list_margin-30px">
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">By: Jeffery Reder</a>
										</li>
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">In: Culture</a>
										</li>
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">2020, March 15</a>
										</li>
									</ul>
									<a href="post_good-morning.html" class="margin-top-bottom-30 d-block js-pointer-large js-animsition-link">
										<h3 class="headline-xxxs text-color-black">
											Good morning!<br>
											Have a nice day
										</h3>
										<p class="body-text-xs margin-top-20 text-color-black">Plaid retro migas venmo lo-fi ethical artisan fingerstache seitan you probably haven't heard of them fam keffiyeh...</p>
									</a>
									<a href="post_good-morning.html" class="skew-btn js-pointer-large js-animsition-link">
										<span class="skew-btn__box">
											<span class="skew-btn__content text-color-black">Continue reading</span>
											<span class="skew-btn__arrow black"></span>
										</span>
									</a>
								</div>
							</div>
							<div class="six-columns padding-top-30">
								<a href="post_good-morning.html" class="d-block hover-box anim-img-reveal js-scrollanim js-pointer-large js-animsition-link">
									<div class="anim-img-reveal__hidden">
										<div class="anim-img-reveal__scale">
											<img class="img-hover-scale" src="assets/images/posts/good-morning/round-white-ceramic-saucer-and-coffee-cup-2638019.jpg" alt="Post">
										</div>
									</div>
								</a>
							</div>
						</article><!-- blog-entry end -->

						<!-- blog-entry start -->
						<article class="flex-container flex-align-center padding-top-60">
							<div class="six-columns padding-top-30">
								<a href="post_dont-panic.html" class="d-block hover-box anim-img-reveal js-scrollanim js-pointer-large js-animsition-link">
									<div class="anim-img-reveal__hidden">
										<div class="anim-img-reveal__scale">
											<img class="img-hover-scale" src="assets/images/posts/home-studio/pexels-3388901.jpg" alt="Post">
										</div>
									</div>
								</a>
							</div>
							<div class="six-columns padding-top-30">
								<div class="column-l-margin-40 anim-fade js-scrollanim">
									<ul class="list list_row list_margin-30px">
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">By: Nick Hufnagel</a>
										</li>
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">In: Design</a>
										</li>
										<li class="list__item">
											<a href="#" class="subhead-xxs text-color-888888 text-hover-to-red js-pointer-small">2020, April 7</a>
										</li>
									</ul>
									<a href="post_dont-panic.html" class="margin-top-bottom-30 d-block js-pointer-large js-animsition-link">
										<h3 class="headline-xxxs text-color-black">
											Home recording studio<br>
											interior design
										</h3>
										<p class="body-text-xs margin-top-20 text-color-black">Plaid retro migas venmo lo-fi ethical artisan fingerstache seitan you probably haven't heard of them fam keffiyeh...</p>
									</a>
									<a href="post_dont-panic.html" class="skew-btn js-pointer-large js-animsition-link">
										<span class="skew-btn__box">
											<span class="skew-btn__content text-color-black">Continue reading</span>
											<span class="skew-btn__arrow black"></span>
										</span>
									</a>
								</div>
							</div>
						</article><!-- blog-entry end -->
					</div><!-- container end -->
				</div><!-- pos-rel end -->
			</section><!-- latest news end --> --}}

			<!-- pricing start -->
			{{-- <section class="pos-rel section-bg-dark-1">
				<!-- pos-rel start -->
				<div class="pos-rel padding-top-bottom-120">
					<!-- title start -->
					<h2 class="headline-xxl text-center hidden-box js-scrollanim">
						<span class="anim-slide">
							Our <span class="text-color-red">Pricing</span>
						</span>
					</h2><!-- title end -->

					<!-- flex-container start -->
					<div class="container small flex-container flex-justify-center padding-top-30">
						<!-- column start -->
						<div class="four-columns column-50-100 padding-top-60">
							<div class="column-l-r-margin-10 price-top-offset content-bg-dark-2 border-radius-10px hidden-box">
								<div class="text-center content-bg-red">
									<h3 class="subhead-m padding-top-bottom-20">Basic</h3>
								</div>
								<h4 class="text-center padding-top-bottom-50">
									<span class="headline-l">$100</span><br>
									<span class="subhead-xs">Per month</span>
								</h4>
								<!-- accordion start -->
								<div class="accordion js-accordion margin-left-right-20">
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Marketing</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item x opacity-05">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Branding</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item x opacity-05">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Photoshoot</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item x opacity-05">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Web development</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item x opacity-05">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
								</div><!-- accordion end -->
								<div class="padding-top-bottom-50 text-center">
									<a href="#" class="ellipse-btn js-pointer-large">sign up</a>
								</div>
							</div>
						</div><!-- column end -->

						<!-- column start -->
						<div class="four-columns column-50-100 padding-top-60">
							<div class="column-l-r-margin-10 content-bg-dark-2 border-radius-10px hidden-box">
								<div class="text-center content-bg-red">
									<h3 class="subhead-m padding-top-bottom-40">Standard</h3>
								</div>
								<h4 class="text-center padding-top-bottom-50">
									<span class="headline-l">$120</span><br>
									<span class="subhead-xs">Per month</span>
								</h4>
								<!-- accordion start -->
								<div class="accordion js-accordion margin-left-right-20">
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Marketing</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Branding</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Photoshoot</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Web development</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item x opacity-05">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
								</div><!-- accordion end -->
								<div class="padding-top-bottom-50 text-center">
									<a href="#" class="ellipse-btn ellipse-btn_red js-pointer-large">sign up</a>
								</div>
							</div>
						</div><!-- column end -->

						<!-- column start -->
						<div class="four-columns column-50-100 padding-top-60">
							<div class="column-l-r-margin-10 price-top-offset content-bg-dark-2 border-radius-10px hidden-box">
								<div class="text-center content-bg-red">
									<h3 class="subhead-m padding-top-bottom-20">Extended</h3>
								</div>
								<h4 class="text-center padding-top-bottom-50">
									<span class="headline-l">$150</span><br>
									<span class="subhead-xs">Per month</span>
								</h4>
								<!-- accordion start -->
								<div class="accordion js-accordion margin-left-right-20">
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Marketing</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item check red">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Branding</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item check red">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Photoshoot</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item check red">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
									<!-- accordion__tab start -->
									<div class="accordion__tab js-accordion-tab">
										<div class="accordion__btn js-accordion-btn js-pointer-large">
											<h6 class="accordion__btn-title headline-xxxxs">Web development</h6>
										</div>
										<div class="accordion__content js-accordion-content">
											<!-- list start -->
											<ul class="list list_center text-color-dadada subhead-xxs">
												<li class="list__item check red">Copper mug</li>
												<li class="list__item check red">Vexillologist +1</li>
												<li class="list__item check red">Prism iPhone</li>
												<li class="list__item check red">Hella quinoa</li>
												<li class="list__item check red">Blog af umami</li>
												<li class="list__item check red">Vinyl snackwave</li>
												<li class="list__item check red">XOXO drinking</li>
											</ul><!-- list end -->
										</div>
									</div><!-- accordion__tab end -->
								</div><!-- accordion end -->
								<div class="padding-top-bottom-50 text-center">
									<a href="#" class="ellipse-btn js-pointer-large">sign up</a>
								</div>
							</div>
						</div><!-- column end -->
					</div><!-- flex-container end -->
				</div><!-- pos-rel end -->
			</section><!-- pricing end --> --}}
		</main><!-- main end -->


		<!-- scripts -->

@endsection
