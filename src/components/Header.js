import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="logo">
                <a href="/"><img src="assets/img/logo/friends-gym-logo.png" alt="logo" style={{height:50}}/></a>
              </div>
              {/* Main-menu */}
              <div className="main-menu f-right d-none d-lg-block">
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
              {/* Header-btn */}
              <div className="header-btns d-none d-lg-block f-right">
                <Link to="/Contact" className="btn">Contact me</Link>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none">
                  <div className="slicknav_menu">
                    <a
                      href="#"
                      aria-haspopup="true"
                      role="button"
                      className={`slicknav_btn ${menuOpen ? '' : 'slicknav_collapsed'}`}
                      onClick={toggleMenu}
                      style={{ outline: 'none' }}
                    >
                      <span className="slicknav_menutxt">MENU</span>
                      <span className="slicknav_icon">
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                      </span>
                    </a>
                    {/* The mobile menu */}
                    <ul
                      className={`slicknav_nav ${menuOpen ? '' : 'slicknav_hidden'}`}
                      aria-hidden={!menuOpen}
                      role="menu"
                      style={{ display: menuOpen ? 'block' : 'none' }}
                    >
                      <li><Link to="/" role="menuitem">Home</Link></li>
                      <li><Link to="/Courses" role="menuitem">Courses</Link></li>
                      <li><Link to="/Pricing" role="menuitem">Pricing</Link></li>
                      <li><Link to="/Gallery" role="menuitem">Gallery</Link></li>
                      
                      <li><Link to="/About" role="menuitem">About</Link></li>
                      <li><Link to="/Contact" role="menuitem">Contact</Link></li>
                    </ul>
                  </div>
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
