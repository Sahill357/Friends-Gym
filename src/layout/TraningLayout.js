import React from 'react'

export default function TraningLayout() {
  return (
    <> 
    {/* Traning categories Start */}
<section className="traning-categories black-bg">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-6 col-lg-6">
        <div className="single-topic text-center mb-30">
          <div className="topic-img">
            <img src="assets/img/gallery/cat1.png" alt />
            <div className="topic-content-box">
              <div className="topic-content">
                <h3>Personal traning</h3>
                <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                <a href="courses.html" className="border-btn">View Courses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="single-topic text-center mb-30">
          <div className="topic-img">
            <img src="assets/img/gallery/cat2.png" alt />
            <div className="topic-content-box">
              <div className="topic-content">
                <h3>Group traning</h3>
                <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                <a href="courses.html" className="btn">View Courses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Traning categories End*/}
    </ >
  )
}
