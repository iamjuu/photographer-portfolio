import React from 'react';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Abdul razik</h1>
          <h3 className="home__education">photo grapher</h3>

          <div className="home__button">
            <a download="" href="" className="button button--ghost">
              Download CV
            </a>
            <a href="#about" className="button">About</a>
          </div>
        </div>

        <div className="home__handle">
          <img src="/pic/friends.jpg" alt="" className="home__img" />
        </div>

        <div className="home__social">
          <a href="https://www.instagram.com/abdulrazikhaque/" target="_blank" rel="noreferrer" className="home__social-link">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="home__social-link">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="home__social-link">
            <i className='bx bxl-dribbble'></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className='bx bx-mouse home__scroll-icon'></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;

