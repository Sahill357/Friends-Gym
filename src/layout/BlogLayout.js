import React from 'react'

export default function BlogLayout() {
  return (
    <> 
    
    {/*? Blog Area Start */}
<section className="home-blog-area pt-10 pb-50">
  <div className="container">
    {/* Section Tittle */}
    <div className="row justify-content-center">
      <div className="col-lg-7 col-md-9 col-sm-10">
        <div className="section-tittle text-center mb-100 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
          <h2>From Blog</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
          <div className="blog-img-cap">
            <div className="blog-img">
              <img src="assets/img/gallery/blog1.png" alt />
            </div>
            <div className="blog-cap">
              <span>Gym &amp; Fitness</span>
              <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".6s">
          <div className="blog-img-cap">
            <div className="blog-img">
              <img src="assets/img/gallery/blog2.png" alt />
            </div>
            <div className="blog-cap">
              <span>Gym &amp; Fitness</span>
              <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Blog Area End */}
    </ >
  )
}
