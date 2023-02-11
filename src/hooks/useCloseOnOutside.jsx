import { useEffect } from 'react';

export default function useCloseOnOutside(boxRef, setModalState) {
  useEffect(() => {
    window.onclick = (event) => {
      if (
        event.target.contains(boxRef.current) &&
        event.target !== boxRef.current
      ) {
        setModalState(false);
        if (document.body.style.overflow !== 'hidden') {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }
    };
  }, []);
}
