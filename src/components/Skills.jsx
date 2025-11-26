import React from 'react';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">My Experience</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Photo Grapher</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">editer</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">photo grapher</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">video graper</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Steet Photo grapher</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">photos</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">video</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Photo shop</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className='bx bxs-badge-check'></i>
                <div>
                  <h3 className="skills__name">Gaming</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

