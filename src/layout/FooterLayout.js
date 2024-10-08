import React from 'react'
import { Link } from 'react-router-dom'


export default function FooterLayout() {
  return (
    <> 
    <div>
  <footer>
    {/*? Footer Start*/}
    <div className="footer-area black-bg">
      <div className="container">
        <div className="footer-top footer-padding">
          {/* Footer Menu */}
          <div className="row">
            <div className="col-xl-12">
              <div className="single-footer-caption mb-50 text-center">
                {/* logo */}
                <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                  <a href="index.html"><img src="assets/img/logo/friends-gym-logo.png" alt style={{height:50}} /></a>
                </div>
                {/* Menu */}
                {/* Header Start */}
                <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                  <div className="main-header main-header2">
                    <div className="menu-wrapper menu-wrapper2">
                      {/* Main-menu */}
                      <div className="main-menu main-menu2 text-center">
                        <nav>
                        <ul id="navigation">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Courses">Courses</Link></li>
                    <li><Link to="/Pricing">Pricing</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                  </ul>
                        </nav>
                      </div>   
                    </div>
                  </div>
                </div>
                {/* Header End */}
                {/* social */}
                <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <div className="footer-copy-right text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved by friends Gym | we <i className="fa fa-heart" aria-hidden="true" /> Friends <a href="https://colorlib.com" target="_blank">Gym</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End*/}
  </footer>
  {/* Scroll Up */}
  <div id="back-top">
    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
  </div>
</div>
    </ >
  )
}
