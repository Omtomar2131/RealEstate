import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (isMenuOpen && !event.target.closest('.h-menu') && !event.target.closest('.menu-toggle')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside); 
    };
  }, [isMenuOpen]);

  return (
    <section className="h-wrapper">
      <div className="innerWidth h-container">
        {/* Logo */}
        <img src='/logo.png' alt="logo" className="img" />

        {/* Hamburger icon for mobile view */}
        <button className="menu-toggle" onClick={handleMenuToggle}>
          ☰
        </button>

        {/* Menu links */}
        <div className={`flexCenter h-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#">Residencies</a>
          <a href="#">Our Values</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
