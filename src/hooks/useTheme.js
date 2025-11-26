import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('selected-theme') || 'dark';
  });

  useEffect(() => {
    const body = document.body;
    const themeButton = document.getElementById('theme-button');

    if (theme === 'light') {
      body.classList.add('light-theme');
      themeButton?.classList.add('bx-sun');
    } else {
      body.classList.remove('light-theme');
      themeButton?.classList.remove('bx-sun');
    }

    localStorage.setItem('selected-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};

export default useTheme;

