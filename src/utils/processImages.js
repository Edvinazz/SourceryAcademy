import { useEffect, useState } from 'react';

export function processImages(data, loading) {
  const [rectangularImages, setRectangles] = useState([]);
  const [squareImages, setSquares] = useState([]);

  useEffect(() => {
    data.forEach((picture) => {
      const img = new Image();
      img.onload = () => {
        if (img.width == img.height && !squareImages.includes(picture)) {
          setSquares((squares) => [...squares, picture]);
        } else if (!rectangularImages.includes(picture)) {
          setRectangles((rectangles) => [...rectangles, picture]);
        }
      };
      img.src = picture.thumbnail;
    });
  }, [loading]);

  return { squareImages, rectangularImages };
}
