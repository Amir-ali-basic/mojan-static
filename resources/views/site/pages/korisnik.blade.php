@extends('layouts.main')

@section('content')

		<!-- main start -->
		<main class="js-animsition-overlay" data-animsition-overlay="true">
			<!-- page head start -->
			<section id="up" class="pos-rel section-bg-dark-1">
				<!-- pos-rel start -->
				<div class="pos-rel flex-min-height-100vh">
					<div class="container padding-top-bottom-120 after-preloader-anim">
						<h3 class="headline-xxxs hidden-box">
							<span class="anim-slide">{{__("msg.users1")}}</span>
						</h3>
						<h2 class="subhead-xxl margin-top-20 anim-text-reveal tr-delay-03">{{__("msg.users2")}}</h2>
					</div>
				</div><!-- pos-rel end -->
			</section><!-- page head end -->

			<!-- services start -->
			<section id="down" class="pos-rel section-bg-dark-2">
				<!-- pos-rel start -->
				<div class="pos-rel flex-min-height-100vh">
					<!-- width-100perc start -->
					<div class="width-100perc padding-bottom-120">
						<!-- padding-top-90 start -->
						<div class="padding-top-120">
							<h2 class="headline-l container hidden-box">
								<span class="anim-slide js-scrollanim">{{__("msg.users3")}}</span>
							</h2>

							<!-- accordion start -->
							<div class="accordion accordion_underline js-accordion margin-top-60">
								<!-- accordion__tab start -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users4")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">{{__("msg.users5")}}</p>
									</div>
								</div><!-- accordion__tab end -->

								<!-- accordion__tab start -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users10")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">{{__("msg.users11")}}</p>
									</div>
								</div><!-- accordion__tab end -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users12")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">{{__("msg.users13")}}</p>
									</div>
								</div><!-- accordion__tab end -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users6")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">{{__("msg.users7")}}</p>
									</div>
								</div><!-- accordion__tab end -->

								<!-- accordion__tab start -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users8")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">
{{__("msg.users9")}}
</p>
									</div>
								</div><!-- accordion__tab end -->
							</div><!-- accordion end -->
						</div><!-- padding-top-90 end -->

						<!-- padding-top-90 start -->
						<div class="padding-top-120">
							<h2 class="headline-l container hidden-box">
								<span class="anim-slide js-scrollanim">{{__("msg.users14")}}</span>
							</h2>

							<!-- accordion start -->
							<div class="accordion accordion_underline js-accordion margin-top-60">
								<!-- accordion__tab start -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users15")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">{{__("msg.users16")}}.</p>
									</div>
								</div><!-- accordion__tab end -->

								<!-- accordion__tab start -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users17")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">{{__("msg.users18")}}</p>
									</div>
								</div><!-- accordion__tab end -->

								<!-- accordion__tab start -->
								<div class="accordion__tab js-accordion-tab">
									<div class="accordion__btn js-accordion-btn container js-pointer-large">
										<h6 class="accordion__btn-title headline-xs margin-top-bottom-30">{{__("msg.users19")}}</h6>
									</div>
									<div class="accordion__content js-accordion-content container">
										<p class="body-text-l">{{__("msg.users20")}}</p>
									</div>
								</div><!-- accordion__tab end -->
							</div><!-- accordion end -->
						</div><!-- padding-top-90 end -->

					</div><!-- width-100perc end -->
				</div><!-- pos-rel end -->
			</section><!-- services end -->



		</main><!-- main end -->
@endsection