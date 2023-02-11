import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useMediaQuery, { ScreenSize } from '~/hooks/useMediaQuery';
import MobileHeader from './Mobile/MobileHeader';
import DesktopHeader from './Desktop/DesktopHeader';

export default function Header() {
  const [showMediaLink, setShowMediaLink] = useState(true);
  const location = useLocation();
  const matches = useMediaQuery(ScreenSize.TabPort);

  useEffect(() => {
    const shouldShowMediaLink = !noMediaArr.some((page) =>
      location.pathname.includes(page)
    );
    setShowMediaLink(shouldShowMediaLink);
  }, [location, noMediaArr]);

  if (matches)
    return (
      <MobileHeader navigationLinks={navigationArr} showMedia={showMediaLink} />
    );
  return (
    <DesktopHeader navigationLinks={navigationArr} showMedia={showMediaLink} />
  );
}
const navigationArr = [
  { path: '/home', title: 'About us' },
  { path: '/academies', title: 'Academies', dropdown: true },
  { path: '/media', title: 'Media' },
  { path: '/register', title: 'Register' },
  { path: '/questions', title: 'Questions' },
];

const noMediaArr = ['/register', '/questions', '/404'];
