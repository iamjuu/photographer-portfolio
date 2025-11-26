import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Razik</h1>

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">Home</a>
          </li>
          <li className="footer__item">
            <a href="#about" className="footer__link">About</a>
          </li>
          <li className="footer__item">
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li className="footer__item">
            <a href="#work" className="footer__link">Work</a>
          </li>
          <li className="footer__item">
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <ul className="footer__social">
          <li className="footer__social-item">
            <a href="#" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className='bx bxl-facebook footer__social-icon'></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className='bx bxl-twitter footer__social-icon'></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className='bx bxl-linkedin footer__social-icon'></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.instagram.com/abdulrazikhaque/" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className='bx bxl-instagram footer__social-icon'></i>
            </a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; 2022 S44WN. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

