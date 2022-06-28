@extends('layouts.main')
@section('content')

    <!-- main start -->
    <main class="js-animsition-overlay" data-animsition-overlay="true">
        <!-- pos-rel start -->
        <section id="up" class="pos-rel js-parallax-bg"
                 style="background-image:url(assets/images/about/about_slider/IMG_8195.jpeg)">
            <!-- bg-overlay -->
            <div class="bg-overlay-black"></div>
            <!-- pos-rel start -->
            <div class="pos-rel flex-min-height-100vh">
                <div class="padding-top-bottom-120 width-100perc">
                    <!-- title start -->
                    <h2 class="headline-xxxxl text-center hidden-box after-preloader-anim">
                        <span class="anim-slide">{{__("msg.products")}}</span>
                        <div class="helper-div">
                            <span class="helper">{{__("msg.product1")}}</span>
                            <span class="helper">{{__("msg.product2")}}</span>
                            <span class="helper">{{__("msg.product3")}}</span>
                            <span class="helper">{{__("msg.product4")}}</span>
                            <span class="helper">{{__("msg.product5")}}</span>
                            <span class="helper">{{__("msg.product6")}}</span>
                            <span class="helper">{{__("msg.product7")}}</span>
                            <span class="helper">{{__("msg.product8")}}</span>

                        </div>

                    </h2><!-- title end -->
                </div>
            </div><!-- pos-rel end -->
        </section><!-- pos-rel end -->

        <!-- blog start -->
        <div id="down" class="pos-rel section-bg-light-2" data-midnight="black">
            <!-- pos-rel start -->
            <div class="pos-rel padding-top-bottom-120">

                <!-- filter-buttons start -->
                <div class="list list_row list_center list_margin-30px container js-filter-button-box js-scrollanim">
                    <button class="list__item js-filter-button anim-fade js-pointer-small js-filter-button-active"
                            data-filter="*">
                        <span class="flip-btn text-color-black" data-text="Svi proizvodi">Svi proizvodi</span>
                    </button>
                    {{-- @foreach ($cat as $c )

                    <button class="list__item js-filter-button anim-fade tr-delay-01 js-pointer-small" data-filter=".{{$c->title}}">
                        <span class="flip-btn text-color-black" data-text="{{$c->title}}">{{$c->title}}</span>
                    </button>
                    @endforeach --}}

                </div><!-- filter-buttons end -->

                <!-- js-isotope-filter-grid-box start -->
                <div class="js-isotope-filter-grid-box padding-top-20 container">
                    <!-- grid-item start -->
                    {{-- @foreach ($posts as $post ) --}}
                    {{-- <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="{{route('blog.single',$post->id )}}" class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/storage/posts/{{$post->image}}" alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{!! $post->desc !!}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small" data-text="{{$post->title}}">{{$post->title}}</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small" data-text="{{$post->category->title}}">{{$post->category->title}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end --> --}}


                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/nikiip.JPG"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product3")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 1">Model 1</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product3")}}">{{__("msg.product3")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->


                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/IMG_8195.jpeg"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product4")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 2">Model 2</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product4")}}">{{__("msg.product4")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->


                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/IMG_8193.jpeg"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product4")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 3">model 3</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product4")}}">{{__("msg.product4")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->


                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/IMG_8146.jpeg"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product4")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 4">Model 4</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product4")}}">{{__("msg.product4")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->


                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/IMG_8182.jpeg"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product4")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 5">Model 5</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product4")}}">{{__("msg.product4")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->


                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/IMG_8168.jpeg"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product4")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 6">Model 6</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product4")}}">{{__("msg.product4")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->


                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/IMG_8156.jpeg"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product4")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 7">Model 7</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product4")}}">{{__("msg.product4")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->
                    <article class="padding-top-40 grid-item-50-50-100 js-isotope-filter-grid-item culture">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="#"
                               class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="img-hover-opacity img-hover-scale in" src="/cover/tinified/IMG_8188.jpeg"
                                     alt="Post">
                                <!-- bg-overlay -->
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs hover-move-right">{{__("msg.product4")}}</h3>
                            </a>
                            <ul class="pos-abs pos-left-top list list_row list_margin-30px">
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill js-pointer-small"
                                       data-text="Model 8">Model 8</a>
                                </li>
                                <li class="list__item">
                                    <a href="#" class="subhead-xxs hover-text-fill tr-delay-01 js-pointer-small"
                                       data-text="{{__("msg.product4")}}">{{__("msg.product4")}}</a>
                                </li>
                            </ul>
                        </div>
                    </article><!-- grid-item end -->
                    {{-- @endforeach --}}

                </div><!-- js-isotope-filter-grid-box end -->
            </div><!-- pos-rel end -->
        </div><!-- blog end -->
    </main><!-- main end -->

    <style>
        .helper {
            font-size: 11px;
            white-space: nowrap;
        }

    </style>
@endsection
