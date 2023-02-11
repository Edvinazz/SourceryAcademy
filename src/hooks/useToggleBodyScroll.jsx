import { useEffect } from 'react';
const useToggleBodyScroll = (isActive) => {
  useEffect(() => {
    if (document.body.style.overflow !== 'hidden' && isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isActive]);
};

export default useToggleBodyScroll;
