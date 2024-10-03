import React from 'react'

export default function GalleryLayout() {
  return (
    <> 
    {/*? Gallery Area Start */}
   <div className="gallery-area section-padding30 ">
  <div className="container-fluid ">
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div className="box snake mb-30">
          <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}} />
          <div className="overlay" style={{top: '-500px', left: 0, width: 446, height: 500}}>
            <div className="overlay-content">
              <h3>Muscle gaining </h3>
              <a href="gallery.html"><i className="ti-plus" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div className="box snake mb-30">
          <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}} />
          <div className="overlay" style={{top: '-1e+07px'}}>
            <div className="overlay-content">
              <h3>Muscle gaining </h3>
              <a href="gallery.html"><i className="ti-plus" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div className="box snake mb-30">
          <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}} />
          <div className="overlay" style={{top: '-1e+07px'}}>
            <div className="overlay-content">
              <h3>Muscle gaining </h3>
              <a href="gallery.html"><i className="ti-plus" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div className="box snake mb-30">
          <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}} />
          <div className="overlay" style={{top: '-1e+07px'}}>
            <div className="overlay-content">
              <h3>Muscle gaining </h3>
              <a href="gallery.html"><i className="ti-plus" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div className="box snake mb-30">
          <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}} />
          <div className="overlay" style={{top: '-1e+07px'}}>
            <div className="overlay-content">
              <h3>Muscle gaining </h3>
              <a href="gallery.html"><i className="ti-plus" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <div className="box snake mb-30">
          <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}} />
          <div className="overlay" style={{top: '-1e+07px'}}>
            <div className="overlay-content">
              <h3>Muscle gaining </h3>
              <a href="gallery.html"><i className="ti-plus" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Gallery Area End */}
    </ >
  )
}
