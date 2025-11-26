import React, { useEffect, useState, useRef } from 'react';
import mixitup from 'mixitup';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixerRef.current = mixitup(containerRef.current, {
        selectors: {
          target: '.work__card',
        },
        animation: {
          duration: 300,
        },
      });

      return () => {
        if (mixerRef.current) {
          mixerRef.current.destroy();
        }
      };
    }
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (mixerRef.current) {
      const filterValue = filter === 'all' ? 'all' : `.${filter}`;
      mixerRef.current.filter(filterValue);
    }
  };

  const works = [
    { img: '/pic/juu.jpg', category: 'web' },
    { img: '/pic/anu.jpg', category: 'movil' },
    { img: '/pic/faju.jpg', category: 'design' },
    { img: '/pic/shahama.jpg', category: 'web' },
    { img: '/pic/cat.jpg', category: 'web' },
    { img: '/pic/thameem.jpg', category: 'movil' },
  ];

  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span 
          className={`work__item ${activeFilter === 'all' ? 'active-work' : ''}`}
          data-filter='all'
          onClick={() => handleFilterClick('all')}
        >
          All
        </span>
        <span 
          className={`work__item ${activeFilter === 'web' ? 'active-work' : ''}`}
          data-filter='.web'
          onClick={() => handleFilterClick('web')}
        >
          Web
        </span>
        <span 
          className={`work__item ${activeFilter === 'movil' ? 'active-work' : ''}`}
          data-filter='.movil'
          onClick={() => handleFilterClick('movil')}
        >
          Movil
        </span>
        <span 
          className={`work__item ${activeFilter === 'design' ? 'active-work' : ''}`}
          data-filter='.design'
          onClick={() => handleFilterClick('design')}
        >
          Design
        </span>
      </div>

      <div className="work__container container grid" ref={containerRef}>
        {works.map((work, index) => (
          <div className={`work__card mix ${work.category}`} key={index}>
            <img src={work.img} alt="" className="work__img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
