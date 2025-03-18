import React, { useState } from 'react';
import Image from 'next/image';
import IonIcon from './IonIcon';

const Header: React.FC = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible((prev) => !prev);
    if (isMenuVisible) setIsMenuVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
    if (isSearchBarVisible) setIsSearchBarVisible(false);
  };

  const closeAll = () => {
    setIsSearchBarVisible(false);
    setIsMenuVisible(false);
  };

  return (
    <header className="header section" data-header>
      <div className="container">
        {/* Logo */}
        <a href="#" className="logo">
          <Image
            src="/assets/images/BlogSit (1).png"
            width={129}
            height={40}
            alt="Blogy logo"
          />
        </a>

        {/* Navigation Menu */}
        <nav className={`navbar ${isMenuVisible ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link hover:underline" data-nav-link onClick={closeAll}>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover:underline" data-nav-link onClick={closeAll}>
                Recent Post
              </a>
            </li>
            {/* <li className="navbar-item">
              <a href="#" className="navbar-link hover:underline" data-nav-link onClick={closeAll}>
                Membership
              </a>
            </li> */}
          </ul>
        </nav>

        {/* Wrapper for Search and Menu Toggle Buttons */}
        <div className="wrapper">
          {/* Search Button */}
          <button
            className="search-btn"
            aria-label="search"
            onClick={toggleSearchBar}
            data-search-toggler
          >
            <IonIcon name="search-outline" ariaHidden={true} />
            <span className="span">Search</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`nav-toggle-btn ${isMenuVisible ? 'active' : ''}`}
            aria-label="toggle menu"
            onClick={toggleMenu}
            data-nav-toggler
          >
            <span className="span one"></span>
            <span className="span two"></span>
            <span className="span three"></span>
          </button>

          {/* Join Button */}
          <a href="#" className="btn">
            Join
          </a>
        </div>
      </div>

      {/* Search Bar (Conditionally Rendered) */}
      {isSearchBarVisible && (
        <div className="search-bar" data-search-bar>
          <div className="input-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="input-field"
            />
            <button
              className="search-close-btn"
              aria-label="close search bar"
              onClick={toggleSearchBar}
              data-search-toggler
            >
              <IonIcon name="close-outline" ariaHidden={true} />
            </button>
          </div>
          <p className="search-bar-text">Please enter at least 3 characters</p>
        </div>
      )}

      {/* Overlay (Conditionally Rendered) */}
      {(isSearchBarVisible || isMenuVisible) && (
        <div
          className="overlay"
          data-overlay
          onClick={closeAll}
        ></div>
      )}
    </header>
  );
};

export default Header;