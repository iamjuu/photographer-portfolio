import { useEffect } from 'react';

const useScrollHeader = () => {
  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header?.classList.add('scroll-header');
      } else {
        header?.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', scrollHeader);
    return () => window.removeEventListener('scroll', scrollHeader);
  }, []);
};

export default useScrollHeader;

