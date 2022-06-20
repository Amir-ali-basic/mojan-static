         
@extends('layouts.main')

@section('content')
       <div class="section-page">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="content-hero text-center"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h1 class="h-title" id="quote">Services</h1>
                  <p>What I do</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section" id="services-section">
          <div class="container">
            <div
              class="content mb-100"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="row">
                <div class="cardd col-lg-4 card1 cursor-item">
                  <div class="num">01</div>
                  <h5>Development</h5>
                  <p>
                    Web development is the building and maintenance of websites; it’s 
                    the work that happens behind the scenes to make a website look great, 
                    work fast and perform well with a seamless user experience.
                  </p>
                  <a
                    class="btn-draw btn--white cursor-item mt-4"
                    href="/contact"
                    ><span class="btn-draw__text"
                      ><span>Learn more</span></span
                    ></a
                  >
                </div>
                <div class="cardd col-lg-4 card2 cursor-item">
                  <div class="num">02</div>
                  <h5>UI/UX</h5>
                  <p>
                UX design refers to user experience design, 
                while UI design stands for user interface design.
                Both of these are crucial to an IT product and need to work closely together.
                <br>
                <br>

                  </p>
                  <a
                    class="btn-draw btn--white cursor-item mt-4"
                    href="/contact"
                    ><span class="btn-draw__text"
                      ><span>Learn more</span></span
                    ></a
                  >
                </div>
                <div class="cardd col-lg-4 card3 cursor-item">
                  <div class="num">03</div>
                  <h5>Web design</h5>
                  <p>
                Web design refers to the design of websites that are displayed on the internet. 
                It usually refers to the user experience aspects of website development rather than software development.
                  </p>
                  <a
                    class="btn-draw btn--white cursor-item mt-4"
                    href="/contact"
                    ><span class="btn-draw__text"
                      ><span>Learn more</span></span
                    ></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
@endsection