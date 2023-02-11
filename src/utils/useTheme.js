import { useEffect } from 'react';

export const Theme = {
  BLUE: 'blue',
  GREEN: 'green',
  RED: 'red',
};

export function useTheme(pageTheme) {
  useEffect(() => {
    if (pageTheme) {
      document.documentElement.setAttribute('data-theme', pageTheme);
    }
    return () => document.documentElement.removeAttribute('data-theme');
  }, [pageTheme]);
}
