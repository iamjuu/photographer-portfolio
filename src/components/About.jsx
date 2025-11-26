import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <img src="/pic/razik.jpg" alt="" className="about__img" />

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className='bx bx-award about__icon'></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">2 Years Working</span>
            </div>
            <div className="about__box">
              <i className='bx bx-briefcase-alt about__icon'></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">10+ Projects</span>
            </div>
            <div className="about__box">
              <i className='bx bx-support about__icon'></i>
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">Online 24/7</span>
            </div>
          </div>

          <p className="about__description">
            "I'm Razik, a dedicated freelance photographer and videographer. With a passion for visual storytelling, I specialize in creating compelling photographs and videos that capture moments with authenticity and creativity. Through my work, I aim to evoke emotions and leave a lasting impact."
          </p>

          <a href="#contact" className="button about__button-contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;

