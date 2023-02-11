import { useEffect } from 'react';

export default function useClickOutside(ref, handleClickOutsideEvent) {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;

      if (!el || el.contains(event.target)) {
        return;
      }

      handleClickOutsideEvent(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handleClickOutsideEvent]);
}
