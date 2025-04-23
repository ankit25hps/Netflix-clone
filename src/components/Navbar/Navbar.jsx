import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_icon from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsSearchActive(false);
    }
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="" className="navbar-logo" />
        </Link>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>My list</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* Search Bar */}
        <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
          <img
            src={search_icon}
            alt="Search Icon"
            className="icon"
            onClick={handleSearchClick}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={handleSearchBlur}
          />
        </div>
        <p>Children</p>
        <img src={bell_icon} className="icons" alt="" />
        <div className="navbar-profile">
          <img src={profile_icon} className="profile" alt="" />
          <img src={caret_icon} className="icons" alt="" />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign out Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;