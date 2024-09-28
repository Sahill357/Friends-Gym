import React from 'react'

export default function TeamLayout() {
  return (
    <> 
    
    {/*? Team */}
<section className="team-area fix">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
          <h2>What I Offer</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
          <div className="cat-icon">
            <img src="assets/img/gallery/team1.png" alt />
          </div>
          <div className="cat-cap">
            <h5><a href="services.html">Body Building</a></h5>
            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
          <div className="cat-icon">
            <img src="assets/img/gallery/team2.png" alt />
          </div>
          <div className="cat-cap">
            <h5><a href="services.html">Muscle Gain</a></h5>
            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
          <div className="cat-icon">
            <img src="assets/img/gallery/team3.png" alt />
          </div>
          <div className="cat-cap">
            <h5><a href="services.html">Weight Loss</a></h5>
            <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Services End */}
    </ >
  )
}
