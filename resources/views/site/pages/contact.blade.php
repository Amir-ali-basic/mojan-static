         
@extends('layouts.main')

@section('content')


		<!-- main start -->
		<main class="js-animsition-overlay" data-animsition-overlay="true">
			<!-- pos-rel start -->
			{{-- <section id="up" class="pos-rel js-parallax-bg" style="background-image:url(assets/images/backgrounds/kal-visuals--UG2O1U2EfY-unsplash.jpg)">
				<!-- bg-overlay -->
				<div class="bg-overlay-black"></div>
				<!-- pos-rel start -->
				<div class="pos-rel flex-min-height-100vh">
					<div class="padding-top-bottom-120 container small after-preloader-anim">
						<!-- title start -->
						<h2 class="headline-xl">
							<span class="hidden-box d-block">
								<span class="anim-slide">The Best</span>
							</span>
							<span class="hidden-box d-block">
								<span class="anim-slide tr-delay-01">Agency for</span>
							</span>
							<span class="hidden-box d-block">
								<span class="anim-slide tr-delay-02">Your Businnes</span>
							</span>
						</h2><!-- title end -->
						<p class="subhead-xs text-color-dadada margin-top-20 anim-fade tr-delay-04">Tote bag cornhole pork belly swag vexillologist godard.</p>
					</div>
				</div><!-- pos-rel end -->
			</section><!-- pos-rel end --> --}}

			<!-- contact us start -->
			<section id="down" class="pos-rel section-bg-dark-1">
				<!-- pos-rel start -->
				<div class="pos-rel flex-min-height-100vh">
					<!-- container start -->
					<div class="padding-top-bottom-120 container">
						<!-- content start -->
						<div class="js-scrollanim">
							<h2 class="headline-l">
								<span class="anim-text-double-fill" data-text="{{__('msg.contact1')}}">{{__('msg.contact1')}}</span>
								{{-- <span class="anim-text-double-fill tr-delay-02" data-text="Us">Us</span> --}}
							</h2>
							<p class="body-text-s margin-top-20 anim-text-reveal tr-delay-04">{{__('msg.contact2')}}</p>
						</div><!-- content end -->

						<!-- flex-container start -->
						<div class="flex-container padding-top-30">
							<!-- column start -->
							<div class="four-columns column-50-100 padding-top-60">
								<div class="column-r-margin-20 js-scrollanim">
									<p class="headline-xxxxs anim-text-double-fill invert" data-text="Email us">Email us</p>
									<div class="padding-top-20">
										<h6 class="anim-fade tr-delay-01">
											<a href="#" class="subhead-xxs text-color-dadada text-hover-to-red js-pointer-small">obuko@gmail.com</a>
										</h6><br>
										<!--<h6 class="anim-fade tr-delay-02">-->
										<!--	<a href="#" class="subhead-xxs text-color-dadada text-hover-to-red js-pointer-small">email@umaya_job.com</a>-->
										<!--</h6><br>-->
										<!--<h6 class="anim-fade tr-delay-03">-->
										<!--	<a href="#" class="subhead-xxs text-color-dadada text-hover-to-red js-pointer-small">email@umaya_agency.com</a>-->
										<!--</h6>-->
									</div>
								</div>
							</div><!-- column end -->

							<!-- column start -->
							<div class="four-columns column-50-100 padding-top-60">
								<div class="column-r-margin-20 js-scrollanim">
									<p class="headline-xxxxs anim-text-double-fill invert" data-text="Visit us">Visit us</p>
									<h6 class="list list_margin-1px padding-top-20 text-color-b0b0b0">
										<span class="list__item">
											<span class="d-inline-block hidden-box">
												<span class="subhead-xxs anim-reveal tr-delay-01">Crna Gora</span>
											</span>
										</span>
										<span class="list__item">
											<span class="d-inline-block hidden-box">
												<span class="subhead-xxs anim-reveal tr-delay-02">Podgorica</span>
											</span>
										</span>
										<!--<span class="list__item">-->
										<!--	<span class="d-inline-block hidden-box">-->
										<!--		<span class="subhead-xxs anim-reveal tr-delay-03">East Victoria 2006 UK</span>-->
										<!--	</span>-->
										<!--</span>-->
									</h6>
									{{-- <div class="padding-top-10 anim-fade tr-delay-04">
										<a href="#" class="subhead-xxs text-color-dadada text-hover-to-red js-pointer-small">Open in google maps</a>
									</div> --}}
								</div>
							</div><!-- column end -->

							<!-- column start -->
							<div class="four-columns column-50-100 padding-top-60">
								<div class="column-r-margin-20 js-scrollanim">
									<p class="headline-xxxxs anim-text-double-fill invert" data-text="Call us">Call us</p>
									<div class="padding-top-20">
										<h6 class="anim-fade tr-delay-01">
											<a href="#" class="subhead-xxs text-color-dadada text-hover-to-red js-pointer-small">+382 67/077-866</a>
										</h6><br>
										<h6 class="anim-fade tr-delay-02">
											<a href="#" class="subhead-xxs text-color-dadada text-hover-to-red js-pointer-small">+382 67/837-586</a>
										</h6>
									</div>
								</div>
							</div><!-- column end -->
						</div><!-- flex-container end -->

						<!-- social btns start -->
						<div class="padding-top-90">
							<ul class="list list_row list_margin-30px js-scrollanim">
								{{-- <li class="list__item anim-fade">
									<a href="#" class="fill-btn text-color-979797 js-pointer-small" data-text="Facebook">Facebook</a>
								</li>
								<li class="list__item anim-fade tr-delay-01">
									<a href="#" class="fill-btn text-color-979797 js-pointer-small" data-text="Dribbble">Dribbble</a>
								</li> --}}
								<li class="list__item anim-fade tr-delay-02">
									<a href="https://www.instagram.com/mojandoo/?hl=en" class="fill-btn text-color-979797 js-pointer-small" data-text="Instagram">Instagram</a>
								</li>
								{{-- <li class="list__item anim-fade tr-delay-03">
									<a href="#" class="fill-btn text-color-979797 js-pointer-small" data-text="Youtube">Youtube</a>
								</li>
								<li class="list__item anim-fade tr-delay-04">
									<a href="#" class="fill-btn text-color-979797 js-pointer-small" data-text="Behance">Behance</a>
								</li>
								<li class="list__item anim-fade tr-delay-05">
									<a href="#" class="fill-btn text-color-979797 js-pointer-small" data-text="Twitter">Twitter</a>
								</li> --}}
							</ul>
						</div><!-- social btns end -->
					</div><!-- container end -->
				</div><!-- pos-rel end -->
			</section><!-- contact us end -->

			<!-- form section start -->
			{{-- <section class="pos-rel bg-img-cover" style="background-image:url(assets/images/backgrounds/architecture-buildings-city-fog-373965.jpg)">
				<!-- bg-overlay -->
				<div class="bg-overlay-black"></div>
				<!-- pos-rel start -->
				<div class="pos-rel flex-min-height-100vh">
					<!-- container start -->
					<div class="container small padding-top-bottom-120 form-box">
						<h4 class="headline-xxxxs text-center">Lets Get In Touch!</h4>
						<!-- flex-container start -->
						<form action="" method="post" name="formobrsv" id="send_form" class="flex-container padding-top-90">
							<!-- column start -->
							<div class="four-columns">
								<div class="column-r-margin-10">
									<input type="text" name="first_name" placeholder="Enter your name" id="first_name" required class="form-input js-pointer-small">
								</div>
							</div><!-- column end -->
							<!-- column start -->
							<div class="four-columns">
								<div class="column-l-r-margin-5">
									<input type="text" name="last_name" placeholder="Enter your last name" id="last_name" required class="form-input js-pointer-small">
								</div>
							</div><!-- column end -->
							<!-- column start -->
							<div class="four-columns">
								<div class="column-l-margin-10">
									<input type="email" name="email" placeholder="Enter your email address" id="email" required class="form-input js-pointer-small">
								</div>
							</div><!-- column end -->
							<!-- column start -->
							<div class="twelve-columns">
								<textarea name="message" placeholder="Enter your message" id="message" required class="form-input js-pointer-small"></textarea>
							</div><!-- column end -->
							<!-- column start -->
							<div class="twelve-columns text-center padding-top-90">
								<button id="send" class="border-btn js-pointer-large">
									<span class="border-btn__inner">submit</span>
									<span class="btn-wait">Wait</span>
									<span class="border-btn__lines-1"></span>
									<span class="border-btn__lines-2"></span>
								</button>
							</div><!-- column end -->
						</form><!-- flex-container end -->
					</div><!-- container end -->

					<!-- alert start -->
					<div class="js-popup-fade" id="m_sent">
						<div class="js-popup">
							<div class="popup-icon">
								<i class="fas fa-check"></i>
							</div>
							<p class="popup-alert headline-xs">
								Thank you!<br>
								Your submission<br>
								has been received!
							</p>
							<div class="js-popup-close js-pointer-large">
								<div class="flip-btn" data-text="Close">Close</div>
							</div>
						</div>
					</div><!-- alert end -->

					<!-- alert start -->
					<div class="js-popup-fade" id="m_err">
						<div class="js-popup">
							<div class="popup-icon">
								<i class="fas fa-times"></i>
							</div>
							<p class="popup-alert headline-xs">Error</p>
							<div class="js-popup-close js-pointer-large">
								<div class="flip-btn" data-text="Close">Close</div>
							</div>
						</div>
					</div><!-- alert end -->
				</div><!-- pos-rel end -->
			</section><!-- form section end --> --}}
		</main><!-- main end -->


        @endsection