import { useState, useEffect } from 'react';

const useMediaQuery = (size) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'auto';
    const media = window.matchMedia('(max-width: ' + size);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, size]);

  return matches;
};

export default useMediaQuery;

export const ScreenSize = {
  Phone: '43.75em',
  TabPort: '56.25em',
  TabLand: '75em',
  BigDesktop: '112.5em',
};
