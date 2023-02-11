import { useEffect } from 'react';

export default function useKeyPressEvent(key, handleEscapeKeyEvent) {
  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'Escape') {
        handleEscapeKeyEvent(event);
      }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [key, handleEscapeKeyEvent]);
}
