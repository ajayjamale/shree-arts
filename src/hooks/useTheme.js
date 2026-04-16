import { useEffect, useState } from 'react';

const STORAGE_KEY = 'shree-arst-theme';

const getPreferredTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = localStorage.getItem(STORAGE_KEY);

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark',
  };
};
