import React, { useEffect } from 'react';
import ContactLayout from '../layout/ContactLayout';
import ServicesLayout from '../layout/ServicesLayout';
import FooterLayout from '../layout/FooterLayout';


export default function Contact() {

 // Scroll to the top when the component mounts
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <> 
    
    <div className="black-bg"> 
{/*? Preloader Start */}
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

 

<main>
    {/*? Hero Start */}
<div className="slider-area2">
  <div className="slider-height2 d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="hero-cap hero-cap2 pt-70">
            <h2>Contact me</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Hero End */}

  <ContactLayout/>

   <ServicesLayout/>

</main>
 
 <FooterLayout/>


 

</div>
    </ >
  )
}
