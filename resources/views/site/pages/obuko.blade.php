@extends('layouts.main')

@section('content')
		<main class="js-animsition-overlay" data-animsition-overlay="true">
			<!-- page head start -->
			<section id="up" class="lines-section pos-rel anim-lines js-parallax-bg" style="background-image:url(assets/images/obuko1.png)">
				<!-- bg-overlay -->
				<div class="bg-overlay-black"></div>
				<!-- lines-container start -->
				<div class="lines-container pos-rel anim-lines flex-min-height-100vh">
					<!-- width-100perc start -->
					<div class="padding-top-bottom-120 width-100perc">
						<!-- title start -->
						<h2 class="headline-xxxl text-center after-preloader-anim">
							<span class="anim-text-fill" data-text="Obuk’o">Obuk’o</span>
							<span class="anim-text-fill tr-delay-01" data-text="branding">branding</span><br>
							<span class="anim-text-fill tr-delay-02" data-text="studio">studio</span>
						</h2><!-- title end -->
					</div><!-- width-100perc end -->
				</div><!-- lines-container end -->
			</section><!-- page head end -->

			<!-- about start -->
			<section id="down" class="lines-section pos-rel black-lines section-bg-light-2" data-midnight="black">
				<!-- flex-container start -->
				<div class="flex-container lines-container pos-rel black-lines padding-top-30 padding-bottom-120">
					<!-- column start -->
					<div class="four-columns column-100-100 padding-top-90">
						<div class="line-col-l-r-margin-20">
							<!-- title start -->
							<h2 class="headline-s js-scrollanim">
								<span class="anim-text-fill text-color-black" data-text="{{__("msg.obuko1")}}">{{__("msg.obuko1")}}</span>
								<span class="anim-text-fill text-color-black tr-delay-01" data-text="{{__("msg.obuko2")}}">{{__("msg.obuko2")}}</span><br>
								<span class="anim-text-fill text-color-red tr-delay-02" data-text="{{__("msg.obuko3")}}">{{__("msg.obuko3")}}</span>
								<span class="anim-text-fill text-color-red tr-delay-03" data-text="{{__("msg.obuko4")}}">{{__("msg.obuko4")}}</span>
							</h2><!-- title end -->
							<p class="body-text-s text-color-black margin-top-20 anim-text-reveal tr-delay-08 js-scrollanim">
{{__("msg.obuko5")}}</p>
							<!-- list start -->
							<!--<ul class="list text-color-6d6d6d margin-top-30 js-scrollanim">-->
							<!--	{{-- <li class="list__item red dot hidden-box">-->
							<!--		<div class="subhead-xxs anim-slide">{{__("msg.product1")}}</div>-->
							<!--	</li> --}}-->
							<!--	<li class="list__item red dot hidden-box">-->
							<!--		<div class="subhead-xxs anim-slide tr-delay-01">{{__("msg.product1")}}</div>-->
							<!--	</li>-->
							<!--	<li class="list__item red dot hidden-box">-->
							<!--		<div class="subhead-xxs anim-slide tr-delay-02">{{__("msg.product2")}}</div>-->
							<!--	</li>-->
							<!--	<li class="list__item red dot hidden-box">-->
							<!--		<div class="subhead-xxs anim-slide tr-delay-03">{{__("msg.product3")}}</div>-->
							<!--	</li>-->
							<!--	<li class="list__item red dot hidden-box">-->
							<!--		<div class="subhead-xxs anim-slide tr-delay-04">{{__("msg.product4")}}</div>-->
							<!--	</li>-->
							<!--	<li class="list__item red dot hidden-box">-->
							<!--		<div class="subhead-xxs anim-slide tr-delay-05">{{__("msg.product5")}}</div>-->
							<!--	</li>-->
							<!--	<li class="list__item red dot hidden-box">-->
							<!--		<div class="subhead-xxs anim-slide tr-delay-06">{{__("msg.product6")}}</div>-->
							<!--	</li>-->
							<!--</ul><!-- list end -->-->
						</div>
					</div><!-- column end -->

					<!-- column start -->
					<div class="eight-columns column-100-100 js-isotope-grid-box">
						<!-- empty grid -->
						<div class="js-isotope-grid-item empty-grid-1px-50-50-none"></div>
						<div class="js-isotope-grid-item empty-grid-100px-50-50-none"></div>

						<!-- grid-item start -->
						<div class="padding-top-90 grid-item-50-50-100 js-isotope-grid-item">
							<!-- grid-margin-box start -->
							<div class="grid-margin-box text-right js-scrollanim">
								<div class="anim-fade">
									<span class="subhead-xs text-color-red">01</span><br>
									<h3 class="headline-xxs text-color-black margin-top-30">{{__("msg.obuko6")}}</h3>
									{{-- <p class="body-text-xs text-color-black margin-top-20">Pok pok authentic fashion axe, vegan venmo leggings raclette tousled twee tattooed. Banh mi humblebrag hammock tacos fashion axe aesthetic vegan sustainable taiyaki thundercats jean shorts tousled cloud bread waistcoat kogi. Cloud bread cardigan messenger bag raw denim swag drinking vinegar. Yuccie jianbing bespoke retro, photo booth salvia hella meh post-ironic cornhole tacos plaid.</p> --}}
								</div>
							</div><!-- grid-margin-box end -->
						</div><!-- grid-item end -->

						<!-- grid-item start -->
						<div class="padding-top-90 grid-item-50-50-100 js-isotope-grid-item">
							<!-- grid-margin-box start -->
							<div class="grid-margin-box js-scrollanim">
								<div class="anim-fade">
									<span class="subhead-xs text-color-red">02</span><br>
									<h3 class="headline-xxs text-color-black margin-top-30">{{__("msg.obuko7")}}</h3>
									{{-- <p class="body-text-xs text-color-black margin-top-20">Pok pok authentic fashion axe, vegan venmo leggings raclette tousled twee tattooed. Banh mi humblebrag hammock tacos fashion axe aesthetic vegan sustainable taiyaki thundercats jean shorts tousled cloud bread waistcoat kogi. Cloud bread cardigan messenger bag raw denim swag drinking vinegar. Yuccie jianbing bespoke retro, photo booth salvia hella meh post-ironic cornhole tacos plaid.</p> --}}
								</div>
							</div><!-- grid-margin-box end -->
						</div><!-- grid-item end -->

						<!-- grid-item start -->
						<div class="padding-top-90 grid-item-50-50-100 js-isotope-grid-item">
							<!-- grid-margin-box start -->
							<div class="grid-margin-box text-right js-scrollanim">
								<div class="anim-fade">
									<span class="subhead-xs text-color-red">03</span><br>
									<h3 class="headline-xxs text-color-black margin-top-30">{{__("msg.obuko8")}}</h3>
									{{-- <p class="body-text-xs text-color-black margin-top-20">Pok pok authentic fashion axe, vegan venmo leggings raclette tousled twee tattooed. Banh mi humblebrag hammock tacos fashion axe aesthetic vegan sustainable taiyaki thundercats jean shorts tousled cloud bread waistcoat kogi. Cloud bread cardigan messenger bag raw denim swag drinking vinegar. Yuccie jianbing bespoke retro, photo booth salvia hella meh post-ironic cornhole tacos plaid.</p> --}}
								</div>
							</div><!-- grid-margin-box end -->
						</div><!-- grid-item end -->

						<!-- grid-item start -->
						<div class="padding-top-90 grid-item-50-50-100 js-isotope-grid-item">
							<!-- grid-margin-box start -->
							<div class="grid-margin-box js-scrollanim">
								<div class="anim-fade">
									<span class="subhead-xs text-color-red">04</span><br>
									<h3 class="headline-xxs text-color-black margin-top-30">{{__("msg.obuko9")}}</h3>
									{{-- <p class="body-text-xs text-color-black margin-top-20">Pok pok authentic fashion axe, vegan venmo leggings raclette tousled twee tattooed. Banh mi humblebrag hammock tacos fashion axe aesthetic vegan sustainable taiyaki thundercats.</p> --}}
								</div>
								<!-- list start -->
								{{-- <ul class="list margin-top-30">
									<!-- progress-box start -->
									<li class="list__item progress-bar">
										<div class="headline-xxxxs text-color-6d6d6d anim-text-fill" data-text="Decoration">Decoration</div>
										<div class="progress-bar__counter headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-02" data-text="97%">97%</div>
										<div class="progress-bar__lines-box black js-progress-animate-box" data-progress="97%">
											<div class="progress-bar__line black js-progress-animate"></div>
										</div>
									</li><!-- progress-box end -->

									<!-- progress-box start -->
									<li class="list__item progress-bar">
										<div class="headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-01" data-text="Furniture">Furniture</div>
										<div class="progress-bar__counter headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-03" data-text="93%">93%</div>
										<div class="progress-bar__lines-box black js-progress-animate-box" data-progress="93%">
											<div class="progress-bar__line black js-progress-animate tr-delay-01"></div>
										</div>
									</li><!-- progress-box end -->

									<!-- progress-box start -->
									<li class="list__item progress-bar">
										<div class="headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-02" data-text="Exterior">Exterior</div>
										<div class="progress-bar__counter headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-04" data-text="100%">100%</div>
										<div class="progress-bar__lines-box black js-progress-animate-box" data-progress="100%">
											<div class="progress-bar__line black js-progress-animate tr-delay-02"></div>
										</div>
									</li><!-- progress-box end -->

									<!-- progress-box start -->
									<li class="list__item progress-bar">
										<div class="headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-03" data-text="Interior">Interior</div>
										<div class="progress-bar__counter headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-05" data-text="98%">98%</div>
										<div class="progress-bar__lines-box black js-progress-animate-box" data-progress="98%">
											<div class="progress-bar__line black js-progress-animate tr-delay-03"></div>
										</div>
									</li><!-- progress-box end -->

									<!-- progress-box start -->
									<li class="list__item progress-bar">
										<div class="headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-04" data-text="Landscape">Landscape</div>
										<div class="progress-bar__counter headline-xxxxs text-color-6d6d6d anim-text-fill tr-delay-06" data-text="86%">86%</div>
										<div class="progress-bar__lines-box black js-progress-animate-box" data-progress="86%">
											<div class="progress-bar__line black js-progress-animate tr-delay-04"></div>
										</div>
									</li><!-- progress-box end -->
								</ul><!-- list end --> --}}
							</div><!-- grid-margin-box end -->
						</div><!-- grid-item end -->
					</div><!-- column end -->
				</div><!-- flex-container end -->
			</section><!-- about end -->
<!-- portfolio start -->
			<section class="lines-section pos-rel black-lines section-bg-light-1" data-midnight="black">
				<!-- lines-container start -->
				<div class="lines-container pos-rel no-lines padding-top-bottom-120">
					<!-- container start -->
					<div class="container small">
						<!-- title start -->
						<h2 class="headline-xxl text-center js-scrollanim">
							<span class="anim-text-fill text-color-black" data-text="{{__("msg.obuko23")}}">{{__("msg.obuko23")}}</span>
							<span class="anim-text-fill text-color-red tr-delay-01" data-text="{{__("msg.obuko24")}}">{{__("msg.obuko24")}}</span>
						</h2><!-- title end -->

						<!-- filter-buttons start -->
						<div class="list list_row list_center list_margin-30px padding-top-90 js-filter-button-box js-scrollanim">
							<button class="list__item js-filter-button anim-fade js-pointer-small js-filter-button-active" data-filter="*">
								{{-- <span class="flip-btn text-color-black" data-text="Vez">Vez</span> --}}
							</button>

						</div><!-- filter-buttons end -->

						<!-- js-isotope-filter-grid-box start -->
						<div class="js-isotope-filter-grid-box padding-top-30">
							<!-- grid-item start -->
							<div class="padding-top-30 js-isotope-filter-grid-item minimal">
								<a href="#" class="d-block hover-box pos-rel js-animsition-link js-pointer-large">
									<div class="anim-img-scale js-img-scale content-bg-dark-1">
										<div class="anim-img-scale__inner">
											<img class="img-hover-opacity" src="assets/images/about/about_slider/IMG_8195.jpeg" alt="project">
										</div>
										<div class="border-left-anim in-10px center"></div>
										<div class="border-top-anim in-10px center"></div>
										<div class="border-right-anim in-10px center"></div>
										<div class="border-bottom-anim in-10px center"></div>
									</div>
									<!-- content start -->
									{{-- <div class="pos-abs pos-center-center text-center">
										<h3 class="hidden-box">
											<span class="headline-xxxs hover-slide">Do what you love</span>
										</h3>
										<span class="hidden-box d-block">
											<span class="subhead-xxs hover-slide tr-delay-02">Minimal</span>
										</span>
									</div><!-- content end --> --}}
								</a>
							</div><!-- grid-item end -->

							<!-- grid-item start -->
							<div class="padding-top-30 js-isotope-filter-grid-item interior">
								<a href="#" class="d-block hover-box pos-rel js-animsition-link js-pointer-large">
									<div class="anim-img-scale js-img-scale content-bg-dark-1">
										<div class="anim-img-scale__inner">
											<img class="img-hover-opacity" src="assets/images/about/about_slider/image_6487327 (1).JPG" alt="project">
										</div>
										<div class="border-left-anim in-10px center"></div>
										<div class="border-top-anim in-10px center"></div>
										<div class="border-right-anim in-10px center"></div>
										<div class="border-bottom-anim in-10px center"></div>
									</div>
									<!-- content start -->
									{{-- <div class="pos-abs pos-center-center text-center">
										<h3 class="hidden-box">
											<span class="headline-xxxs hover-slide">Grey sofa</span>
										</h3>
										<span class="hidden-box d-block">
											<span class="subhead-xxs hover-slide tr-delay-02">Interior</span>
										</span>
									</div><!-- content end --> --}}
								</a>
							</div><!-- grid-item end -->

							<!-- grid-item start -->
							<div class="padding-top-30 js-isotope-filter-grid-item minimal">
								<a href="#" class="d-block hover-box pos-rel js-animsition-link js-pointer-large">
									<div class="anim-img-scale js-img-scale content-bg-dark-1">
										<div class="anim-img-scale__inner">
											<img class="img-hover-opacity" src="assets/images/about/about_slider/IMG_8189.jpeg" alt="project">
										</div>
										<div class="border-left-anim in-10px center"></div>
										<div class="border-top-anim in-10px center"></div>
										<div class="border-right-anim in-10px center"></div>
										<div class="border-bottom-anim in-10px center"></div>
									</div>
									{{-- <!-- content start -->
									<div class="pos-abs pos-center-center text-center">
										<h3 class="hidden-box">
											<span class="headline-xxxs hover-slide">Luxury house</span>
										</h3>
										<span class="hidden-box d-block">
											<span class="subhead-xxs hover-slide tr-delay-02">Minimal</span>
										</span>
									</div><!-- content end --> --}}
								</a>
							</div><!-- grid-item end -->

							<!-- grid-item start -->
							<div class="padding-top-30 js-isotope-filter-grid-item loft">
								<a href="#" class="d-block hover-box pos-rel js-animsition-link js-pointer-large">
									<div class="anim-img-scale js-img-scale content-bg-dark-1">
										<div class="anim-img-scale__inner">
											<img class="img-hover-opacity" src="assets/images/about/about_slider/IMG_8211 (1).jpeg" alt="project">
										</div>
										<div class="border-left-anim in-10px center"></div>
										<div class="border-top-anim in-10px center"></div>
										<div class="border-right-anim in-10px center"></div>
										<div class="border-bottom-anim in-10px center"></div>
									</div>
									<!-- content start -->
									{{-- <div class="pos-abs pos-center-center text-center">
										<h3 class="hidden-box">
											<span class="headline-xxxs hover-slide">Pure minimalism</span>
										</h3>
										<span class="hidden-box d-block">
											<span class="subhead-xxs hover-slide tr-delay-02">Loft</span>
										</span>
									</div><!-- content end --> --}}
								</a>
							</div><!-- grid-item end -->

							<!-- grid-item start -->
							<div class="padding-top-30 js-isotope-filter-grid-item interior">
								<a href="#" class="d-block hover-box pos-rel js-animsition-link js-pointer-large">
									<div class="anim-img-scale js-img-scale content-bg-dark-1">
										<div class="anim-img-scale__inner">
											<img class="img-hover-opacity" src="assets/images/about/about_slider/IMG_8156.jpeg" alt="project">
										</div>
										<div class="border-left-anim in-10px center"></div>
										<div class="border-top-anim in-10px center"></div>
										<div class="border-right-anim in-10px center"></div>
										<div class="border-bottom-anim in-10px center"></div>
									</div>
									<!-- content start -->
									{{-- <div class="pos-abs pos-center-center text-center">
										<h3 class="hidden-box">
											<span class="headline-xxxs hover-slide">Vacation home</span>
										</h3>
										<span class="hidden-box d-block">
											<span class="subhead-xxs hover-slide tr-delay-02">Interior</span>
										</span>
									</div><!-- content end --> --}}
								</a>
							</div><!-- grid-item end -->
						</div><!-- js-isotope-filter-grid-box end -->
					</div><!-- container end -->
				</div><!-- lines-container end -->
			</section><!-- portfolio end -->



		</main><!-- main end -->
@endsection