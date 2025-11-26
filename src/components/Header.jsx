import React from 'react';

const Header = ({ toggleTheme }) => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">hey, friends</a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className='bx bx-home'></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className='bx bx-user'></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className='bx bx-book'></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className='bx bx-briefcase-alt-2'></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className='bx bx-message-square-dots'></i>
              </a>
            </li>
          </ul>
        </div>

        <i 
          className='bx bx-moon change-theme change-theme-button' 
          id="theme-button"
          onClick={toggleTheme}
        ></i>
      </nav>
    </header>
  );
};

export default Header;

