import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="logo">
                <Link to="/"><img src="assets/img/logo/logo.png" alt="logo" /></Link>
              </div>
              {/* Main-menu */}
              <div className="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Courses">Courses</Link></li>
                    <li><Link to="/Pricing">Pricing</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>          
              {/* Header-btn */}
              <div className="header-btns d-none d-lg-block f-right">
                <Link to="/Contact" className="btn">Contact me</Link>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none">
                  {/* Mobile menu logic here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
  );
};

export default Header;
