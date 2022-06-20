<!-- header start -->
<header class="fixed-header">
    <style>
        .hide-header {
            display: none !important;
        }

        .header-logo {
            height: 70px !important;
        }

        .header-logo__box img {
            height: 70px !important;
        }
    </style>


    <!-- logo start -->
    <div class="header-logo js-midnight-color js-headroom">
        <div class="hidden-box">
            <a href="/" class="header-logo__box js-pointer-large js-animsition-link">
                <img class="header-logo__img white" id="logo" src="/assets/images/logo/Mojan.svg" alt="logo">
                {{-- <img class="header-logo__img black" src="/assets/images/logo/Mojan.svg" alt="logo"> --}}
            </a>
        </div>
    </div><!-- logo end -->

    <!-- menu-icon start -->
    <div class="menu-icon js-menu-open-close js-pointer-large js-midnight-color js-headroom">
        <div class="menu-icon__box">
            <span class="menu-icon__inner"></span>
            <span class="menu-icon__close"></span>
        </div>
    </div><!-- menu-icon end -->

    <!-- header-contact start -->
{{-- <div class="header-contact js-midnight-color js-headroom">
    <div class="header-contact__flex">
        <div class="header-contact__anim">
            <a href="#" class="header-contact__btn vertical-text center js-pointer-large">
                <span class="vertical-text__inner"><i class="far fa-comment-dots"></i> Get in touch</span>
            </a>
        </div>
    </div>
</div><!-- header-contact end --> --}}

<!-- header-social start -->
    <div class="header-social after-preloader-anim js-midnight-color js-headroom">
        <ul class="list list_center list_margin-20px hidden-box">
            {{-- <li class="list__item">
                <div class="hidden-box d-inline-block">
                    <a href="#" class="anim-slide js-pointer-small">
                        <i class="fab fa-whatsapp-"></i>
                    </a>
                </div>
            </li> --}}
            <li class="list__item">
                <div class="hidden-box d-inline-block">
                    <a href="#" class="anim-slide tr-delay-02 js-pointer-small">
                        <i class="fab fa-viber"></i>
                    </a>
                </div>
            </li>
            <li class="list__item">
                <div class="hidden-box d-inline-block">
                    <a href="https://www.instagram.com/mojandoo/?hl=en" class="anim-slide tr-delay-04 js-pointer-small">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </li>
            {{-- <li class="list__item">
                <div class="hidden-box d-inline-block">
                    <a href="#" class="anim-slide tr-delay-06 js-pointer-small">
                        <i class="fab fa-behance"></i>
                    </a>
                </div>
            </li>
            <li class="list__item">
                <div class="hidden-box d-inline-block">
                    <a href="#" class="anim-slide tr-delay-08 js-pointer-small">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </div>
            </li>
            <li class="list__item">
                <div class="hidden-box d-inline-block">
                    <a href="#" class="anim-slide tr-delay-10 js-pointer-small">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </li> --}}
        </ul>
    </div><!-- header-social end -->
</header><!-- header end -->

<!-- navigation start -->
<nav class="nav-container pos-rel js-dropdown-active-box">
    <!-- pos-rel start -->
    <div class="pos-rel height-100perc">
        <!-- dropdown close btn start -->
        <div class="dropdown-close">
            <div class="dropdown-close__inner js-dropdown-close js-pointer-large">
                <span class="dropdown-close__arrow"></span>
            </div>
        </div><!-- dropdown close btn end -->

        <!-- js-nav-slider-bg start -->
        <div class="js-nav-slider-bg">
            <!-- swiper-wrapper start -->
            <div class="swiper-wrapper">
                <!-- swiper-slide start -->
                <div class="swiper-slide">
                    <div class="nav-slide-bg"
                         style="background-image:url(assets/images/projects/speakers/revolt-BMest61rcqs-unsplash.jpg)"></div>
                    <div class="bg-overlay-black"></div>
                </div><!-- swiper-slide end -->
                <!-- swiper-slide start -->
                <div class="swiper-slide">
                    <div class="nav-slide-bg"
                         style="background-image:url(assets/images/projects/sneakers/revolt-164_6wVEHfI-unsplash.jpg)"></div>
                    <div class="bg-overlay-black"></div>
                </div><!-- swiper-slide end -->
                <!-- swiper-slide start -->
                <div class="swiper-slide">
                    <div class="nav-slide-bg"
                         style="background-image:url(assets/images/projects/black-bike/josh-nuttall-pIwu5XNvXpk-unsplash.jpg)"></div>
                    <div class="bg-overlay-black"></div>
                </div><!-- swiper-slide end -->
                <!-- swiper-slide start -->
                <div class="swiper-slide">
                    <div class="nav-slide-bg"
                         style="background-image:url(assets/images/projects/pexels/woman-in-black-sexy-top-2825034.jpg)"></div>
                    <div class="bg-overlay-black"></div>
                </div><!-- swiper-slide end -->
                <!-- swiper-slide start -->
                <div class="swiper-slide">
                    <div class="nav-slide-bg"
                         style="background-image:url(assets/images/projects/furniture/goashape-RvyJGaoaWrs-unsplash.jpg)"></div>
                    <div class="bg-overlay-black"></div>
                </div><!-- swiper-slide end -->
            </div><!-- swiper-wrapper end -->
        </div><!-- js-nav-slider-bg end -->

        <!-- menu-box start -->
        <ul class="menu-box">
            <!-- nav-btn-box start -->
            <li class="nav-btn-box js-dropdown-open">
                <a href="/" class="nav-btn large dropdown-hidden-btn js-pointer-large">
                    <span class="nav-btn__inner" data-text="{{__("msg.home")}}">{{__("msg.home")}}</span>
                </a>
                <!-- dropdown start -->
                {{-- <ul class="menu-box dropdown js-dropdown">
                    <li class="nav-btn-box">
                        <a href="home_creative-agency.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Creative agency">Creative agency</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="home_interior-design.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Interior design">Interior design</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="home_corporate.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Corporate">Corporate</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="home_freelancer.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Freelancer">Freelancer</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="home_musician.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Musician">Musician</span>
                        </a>
                    </li>
                </ul><!-- dropdown end --> --}}
            </li><!-- nav-btn-box end -->

            <!-- nav-btn-box start -->
            <li class="nav-btn-box js-dropdown-open">
                <a href="/about" class="nav-btn large dropdown-hidden-btn js-pointer-large">
                    <span class="nav-btn__inner" data-text="{{__("msg.about")}}">{{__("msg.about")}}</span>
                </a>

                <!-- dropdown start -->
                {{-- <ul class="menu-box dropdown js-dropdown">
                    <li class="nav-btn-box">
                        <a href="pages_about-us.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="About us">About us</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="pages_who-we-are.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Who we are">Who we are</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="pages_what-we-do.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="What We Do">What We Do</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="pages_agency.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Agency">Agency</span>
                        </a>
                    </li>
                    <li class="nav-btn-box">
                        <a href="pages_services.html" class="nav-btn js-animsition-link js-pointer-large">
                            <span class="nav-btn__inner" data-text="Services">Services</span>
                        </a>
                    </li>
                </ul><!-- dropdown end --> --}}
            </li><!-- nav-btn-box end -->
                    <!-- nav-btn-box start -->
            <li class="nav-btn-box js-dropdown-slider-open">
                <a href="/obuko" class="nav-btn large dropdown-hidden-btn js-pointer-large">
                    <span class="nav-btn__inner" data-text="Obuk`o" style="color:#F47527">Obuk`o</span>
                </a>

                <!-- dropdown start -->
                {{-- <div class="dropdown js-dropdown">
                    <!-- js-nav-slider start -->
                    <div class="js-nav-slider">
                        <!-- swiper-wrapper start -->
                        <ul class="swiper-wrapper">
                            <!-- swiper-slide start -->
                            <li class="nav-btn-box swiper-slide">
                                <div class="hidden-box">
                                    <a href="project_drone.html" class="nav-btn small js-animsition-link js-pointer-large">
                                        <span class="nav-btn__inner" data-text="Speakers">Speakers</span>
                                    </a>
                                </div>
                            </li><!-- swiper-slide end -->
                            <!-- swiper-slide start -->
                            <li class="nav-btn-box swiper-slide">
                                <div class="hidden-box">
                                    <a href="project_drone.html" class="nav-btn small js-animsition-link js-pointer-large">
                                        <span class="nav-btn__inner" data-text="Sneakers">Sneakers</span>
                                    </a>
                                </div>
                            </li><!-- swiper-slide end -->
                            <!-- swiper-slide start -->
                            <li class="nav-btn-box swiper-slide">
                                <div class="hidden-box">
                                    <a href="project_drone.html" class="nav-btn small js-animsition-link js-pointer-large">
                                        <span class="nav-btn__inner" data-text="Black Bike">Black Bike</span>
                                    </a>
                                </div>
                            </li><!-- swiper-slide end -->
                            <!-- swiper-slide start -->
                            <li class="nav-btn-box swiper-slide">
                                <div class="hidden-box">
                                    <a href="project_drone.html" class="nav-btn small js-animsition-link js-pointer-large">
                                        <span class="nav-btn__inner" data-text="Pexels">Pexels</span>
                                    </a>
                                </div>
                            </li><!-- swiper-slide end -->
                            <!-- swiper-slide start -->
                            <li class="nav-btn-box swiper-slide">
                                <div class="hidden-box">
                                    <a href="project_drone.html" class="nav-btn small js-animsition-link js-pointer-large">
                                        <span class="nav-btn__inner" data-text="Furniture">Furniture</span>
                                    </a>
                                </div>
                            </li><!-- swiper-slide end -->
                        </ul><!-- swiper-wrapper end -->

                        <!-- swiper-button-prev start -->
                        <div class="swiper-button-prev-box">
                            <div class="dropdown-slider-controls">
                                <div class="swiper-button-prev"></div>
                            </div>
                        </div><!-- swiper-button-prev end -->
                        <!-- swiper-button-next start -->
                        <div class="swiper-button-next-box">
                            <div class="dropdown-slider-controls">
                                <div class="swiper-button-next"></div>
                            </div>
                        </div><!-- swiper-button-next end -->

                        <!-- swiper-pagination start -->
                        <div class="pagination-box">
                            <div class="dropdown-slider-controls">
                                <div class="swiper-pagination counter-pagination"></div>
                            </div>
                        </div><!-- swiper-pagination end -->
                    </div><!-- js-nav-slider end -->
                </div><!-- dropdown end --> --}}
            </li><!-- nav-btn-box end -->

            <!-- nav-btn-box start -->
        <li class="nav-btn-box js-dropdown-open">
            <a href="/products" class="nav-btn large dropdown-hidden-btn js-pointer-large">
                <span class="nav-btn__inner" data-text="{{__("msg.products")}}">{{__("msg.products")}}</span>
            </a>
{{-- 
    @foreach($languages->toArray() as $lang)
        <br>
        <br>
        <form action="#">
            <button class="border-btn js-pointer-large" name="lang" value="{{ $lang['code'] }}">
                <span class="border-btn__inner">{{ $lang['name'] }}</span>
                <span class="border-btn__lines-1">mn</span>
                <span class="border-btn__lines-2">en</span>
            </button>
        </form>
    @endforeach --}}

        </li><!-- nav-btn-box end -->



            <!-- nav-btn-box start -->
        {{-- <li class="nav-btn-box js-dropdown-open">
            <a href="/works" class="nav-btn large dropdown-hidden-btn js-pointer-large">
                <span class="nav-btn__inner" data-text="{{__("msg.projects")}}">{{__("msg.projects")}}</span>
            </a> --}}

        <!-- dropdown start -->
            {{-- <ul class="menu-box dropdown js-dropdown">
                <li class="nav-btn-box">
                    <a href="blog_sidebar.html" class="nav-btn js-animsition-link js-pointer-large">
                        <span class="nav-btn__inner" data-text="Sidebar">Sidebar</span>
                    </a>
                </li>
                <li class="nav-btn-box">
                    <a href="blog_grid.html" class="nav-btn js-animsition-link js-pointer-large">
                        <span class="nav-btn__inner" data-text="Grid">Grid</span>
                    </a>
                </li>
                <li class="nav-btn-box">
                    <a href="blog_sliders.html" class="nav-btn js-animsition-link js-pointer-large">
                        <span class="nav-btn__inner" data-text="Sliders">Sliders</span>
                    </a>
                </li>
                <li class="nav-btn-box">
                    <a href="blog_filter.html" class="nav-btn js-animsition-link js-pointer-large">
                        <span class="nav-btn__inner" data-text="Filter">Filter</span>
                    </a>
                </li>
            </ul><!-- dropdown end --> --}}
            </li><!-- nav-btn-box end -->
            <!-- nav-btn-box start -->
            <li class="nav-btn-box js-dropdown-open">
                <a href="/info" class="nav-btn large dropdown-hidden-btn js-pointer-large">
                    <span class="nav-btn__inner" data-text="{{__("msg.foruser")}}">{{__("msg.foruser")}}</span>
                </a>

            </li><!-- nav-btn-box end -->

            <!-- nav-btn-box start -->
            <li class="nav-btn-box">
                <a href="contact" class="nav-btn large dropdown-hidden-btn js-animsition-link js-pointer-large">
                    <span class="nav-btn__inner" data-text="{{__("msg.contact")}}">{{__("msg.contact")}}</span>
                </a>
            </li><!-- nav-btn-box end -->
            <li class="nav-btn-box">
                {{--TODO: Refactor this--}}
                {{-- @foreach($languages->toArray() as $lang)
                    <br>
                    <br>
                    <form action="{{ route('welcome') }}" class="d-flex">
                        <button class="border-btn js-pointer-large d-flex" name="lang" value="{{ $lang['code'] }}">
                            <span class="border-btn__inner">{{ $lang['name'] }}</span>
                            <span class="border-btn__lines-1">mn</span>
                            <span class="border-btn__lines-2">en</span>
                        </button>
                    </form>
                @endforeach --}}
            </li>
                    <li class="nav-btn-box js-dropdown-open d-flex m-4">

    @foreach($languages->toArray() as $lang)
        <br>
        <br>
        <form action="#">
            <button class="border-btn js-pointer-large " name="lang" value="{{ $lang['code'] }}">
                <span class="border-btn__inner">{{ $lang['name'] }}</span>
                {{-- <span class="border-btn__lines-1">mn</span>
                <span class="border-btn__lines-2">en</span> --}}
            </button>
        </form>
    @endforeach

        </li>
        </ul><!-- menu-box end -->

        <!-- nav-information start -->
    {{-- <div class="nav-information">
        <!-- nav-email start -->
        <div>
            <div class="hidden-box d-inline-block">
                <div class="headline-xxxxs nav-title-color nav-reveal-anim js-nav-anim">Email</div>
            </div>
            <div class="nav-fade-anim js-nav-anim margin-top-10">
                <a href="#" class="subhead-xxs nav-text-color text-hover-to-red js-pointer-small">email@umaya_agency.com</a><br>
                <a href="#" class="subhead-xxs nav-text-color text-hover-to-red js-pointer-small">email@umaya_job.com</a>
            </div>
        </div><!-- nav-email end -->

        <!-- nav-address start -->
        <div>
            <div class="hidden-box d-inline-block">
                <div class="headline-xxxxs nav-title-color nav-reveal-anim js-nav-anim">Address</div>
            </div>
            <div class="nav-fade-anim js-nav-anim margin-top-10">
                <a href="#" class="subhead-xxs nav-text-color text-hover-to-red js-pointer-small">
                    PO Box 223158 Oliver Street<br>
                    East Victoria 2006 UK
                </a>
            </div>
        </div><!-- nav-address end -->

        <!-- nav-phone start -->
        <div>
            <div class="hidden-box d-inline-block">
                <div class="headline-xxxxs nav-title-color nav-reveal-anim js-nav-anim">Phone</div>
            </div>
            <div class="nav-fade-anim js-nav-anim margin-top-10">
                <a href="#" class="subhead-xxs nav-text-color text-hover-to-red js-pointer-small">+23 8 8532 7834</a><br>
                <a href="#" class="subhead-xxs nav-text-color text-hover-to-red js-pointer-small">+23 8 9635 7335</a>
            </div>
        </div><!-- nav-phone end -->
    </div><!-- nav-information end --> --}}

    <!-- nav-copyright start -->
        <div class="nav-copyright text-right">
            {{-- <p class="copyright-style nav-fade-anim js-nav-anim">
                &copy; Copyright 2020 <a href="www.alibasicamir.com" class="text-weight-700 js-pointer-small"> Amir-ali-basic.</a>
            </p> --}}
        </div><!-- nav-copyright end -->
    </div><!-- pos-rel end -->
</nav><!-- navigation end -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    $(document).ready(function () {
        let pathname = window.location.pathname;
        let catIdPath = pathname;
        console.log(catIdPath);

        if (catIdPath == '/works') {
            $(".header-social").addClass("hide-header");

        }

    });
    $(document).ready(function () {

        $(document).scroll(function () {
            if ($(document).scrollTop() > 100) {
                $('#logo').attr('src', "/assets/images/logo/type.svg");
                $("#logo").addClass('rotate');
            } else {
                $('#logo').attr('src', "/assets/images/logo/Mojan.svg");
                $("#logo").addClass('opacity');
                $("#logo").removeClass('rotate');

            }
        });
    });

</script>
