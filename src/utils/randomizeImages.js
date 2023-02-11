import { useEffect } from 'react';

export function randomizeImages(pictures_filtrated, loading) {
  useEffect(() => {
    for (let i = pictures_filtrated.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pictures_filtrated[i], pictures_filtrated[j]] = [
        pictures_filtrated[j],
        pictures_filtrated[i],
      ];
    }
  }, [loading]);
  return pictures_filtrated;
}
