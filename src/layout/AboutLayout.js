import React from 'react'

export default function AboutLayout() {
  return (
    <> 
    {/*? About Area-2 Start */}
<section className="about-area2 fix pb-padding pt-50 pb-80">
  <div className="support-wrapper align-items-center">
    <div className="right-content2">
      {/* img */}
      <div className="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
        <img src="assets/img/gallery/about.png" alt />
      </div>
    </div>
    <div className="left-content2">
      {/* section tittle */}
      <div className="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
        <div className="front-text">
          <h2 className>About Me</h2>
          <p>You’ll look at graphs and charts in Task One, how to approach the task and the language needed 
            for a successful answer. You’ll examine Task Two questions and learn how to plan, write and 
            check academic essays.</p>
          <p className="mb-40">Task One, how to approach the task and the language needed for a successful answer. You’ll 
            examine Task Two questions and learn how to plan, write and check academic essays.</p>
          <a href="courses.html" className="border-btn">My Courses</a>
        </div>
         
      </div>
    </div>
  </div>
</section>

{/* About Area End */}
    </ >
  )
}
