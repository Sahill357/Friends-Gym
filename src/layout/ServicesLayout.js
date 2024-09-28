import React from 'react'

export default function ServicesLayout() {
  return (
    <> 
    {/* ? services-area */}
<section className="services-area">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
        <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
          <div className="features-icon">
            <img src="assets/img/icon/icon1.svg" alt />
          </div>
          <div className="features-caption">
            <h3>Location</h3>
            <p>You’ll look at graphs and charts in Task One, how to approach </p>
          </div>
           

        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
        <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
          <div className="features-icon">
            <img src="assets/img/icon/icon2.svg" alt />
          </div>
          <div className="features-caption">
            <h3>Phone</h3>
            <p>(90) 277 278 2566</p>
            <p>  (78) 267 256 2578</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
        <div className="single-services mb-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
          <div className="features-icon">
            <img src="assets/img/icon/icon3.svg" alt />
          </div>
          <div className="features-caption">
            <h3>Email</h3>
            <p>jacson767@gmail.com</p>
            <p>contact56@zacsion.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ? services-area end*/}
    </ >
  )
}
