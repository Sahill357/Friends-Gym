import React, { useEffect } from 'react';

import { Link } from 'react-router-dom'
import TeamLayout from '../layout/TeamLayout';
import GalleryLayout from '../layout/GalleryLayout';
import PricingLayout from '../layout/PricingLayout';
import AboutLayout from '../layout/AboutLayout';
import BlogLayout from '../layout/BlogLayout';
import VideoLayout from '../layout/VideoLayout';
import ServicesLayout from '../layout/ServicesLayout';
import FooterLayout from '../layout/FooterLayout';
import TraningLayout from '../layout/TraningLayout';
import Header from '../components/Header';

export default function Home() {

 // Scroll to the top when the component mounts
 useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <> 
     <div className="black-bg">
    {/* ? Preloader Start */}
{/* <div id="preloader-active">
  <div className="preloader d-flex align-items-center justify-content-center">
    <div className="preloader-inner position-relative">
      <div className="preloader-circle" />
      <div className="preloader-img pere-text">
        <img src="assets/img/logo/loder.png" alt />
      </div>
    </div>
  </div>
</div> */}
{/* Preloader Start */}

 <Header/>



<main>

{/*? slider Area Start*/}
<div className="slider-area position-relative">
  <div className="slider-active">
    {/* Single Slider */}
    <div className="single-slider slider-height d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-10">
            <div className="hero__caption">
              <span data-animation="fadeInLeft" data-delay="0.1s">Hi This is  Zacson</span>
              <h1 data-animation="fadeInLeft" data-delay="0.4s">Gym Trainer</h1>
              <a href="#" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">My Courses</a>
            </div>
          </div>
        </div>
      </div>          
    </div>
  </div>
</div>
{/* slider Area End*/}
 
 <TraningLayout/>
 <TeamLayout/>
 <GalleryLayout/>
 <PricingLayout/>
 <AboutLayout/>
 <BlogLayout/>
 <VideoLayout/>
 <ServicesLayout/>
 <FooterLayout/>
 
</main>
     </div>

 </ >
  )
}
