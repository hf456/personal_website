import React, { useState } from 'react';
import './Navbar.css'


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Function to handle smooth scrolling
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <img 
            src="src\assets\logo_icon.png" 
            alt="K icon" 
            width="75" 
            height="75"
            className="logo-img"
          />

          <ul className="nav-menu">
            <li onClick={() => handleScrollTo('home')}>Home</li>
            <li onClick={() => handleScrollTo('skill')}>Skill Set</li>
            <li onClick={() => handleScrollTo('projects')}>Projects</li>
            <li onClick={() => handleScrollTo('contact')}>Contact</li>
          </ul>

          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>

        {/* Mobile menu */}
        <ul className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
          <li onClick={() => handleScrollTo('home')}>Home</li>
          <li onClick={() => handleScrollTo('projects')}>Projects</li>
          <li onClick={() => handleScrollTo('contact')}>Contact</li>
        </ul>
      </header>


    </>
  );
};

export default Header;