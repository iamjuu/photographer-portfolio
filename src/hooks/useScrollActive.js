import { useEffect } from 'react';

const useScrollActive = () => {
  useEffect(() => {
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add('active-link');
        } else {
          navLink?.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);
};

export default useScrollActive;

