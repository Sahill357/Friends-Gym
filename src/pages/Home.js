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

<header>
  {/* Header Start */}
  <div className="header-area header-transparent">
    <div className="main-header header-sticky">
      <div className="container-fluid">
        <div className="menu-wrapper d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo">
            <a href="index.html"><img src="assets/img/logo/logo.png" alt /></a>
          </div>
          {/* Main-menu */}
          <div className="main-menu f-right d-none d-lg-block">
            <nav>
              <ul id="navigation">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Courses">Courses</Link></li>
                <li><Link to="Pricing">Pricing</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                 
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </nav>
          </div>          
          {/* Header-btn */}
          <div className="header-btns d-none d-lg-block f-right">
            <a href="contact.html" className="btn">Contact me</a>
          </div>
          {/* Mobile Menu */}
          <div className="col-12">
            <div className="mobile_menu d-block d-lg-none"><div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed"><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>
                  <li><a href="index.html" role="menuitem" tabIndex={-1}>Home</a></li>
                  <li><a href="about.html" role="menuitem" tabIndex={-1}>About</a></li>
                  <li><a href="courses.html" role="menuitem" tabIndex={-1}>Courses</a></li>
                  <li><a href="pricing.html" role="menuitem" tabIndex={-1}>Pricing</a></li>
                  <li><a href="gallery.html" role="menuitem" tabIndex={-1}>Gallery</a></li>
                  <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" /><a href="blog.html" tabIndex={-1}>Blog</a>
                    <span className="slicknav_arrow">+</span><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                      <li><a href="blog.html" role="menuitem" tabIndex={-1}>Blog</a></li>
                      <li><a href="blog_details.html" role="menuitem" tabIndex={-1}>Blog Details</a></li>
                      <li><a href="elements.html" role="menuitem" tabIndex={-1}>Elements</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html" role="menuitem" tabIndex={-1}>Contact</a></li>
                </ul></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>



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
              <a href="courses.html" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">My Courses</a>
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
