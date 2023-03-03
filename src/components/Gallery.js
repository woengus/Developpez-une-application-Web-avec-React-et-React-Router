import { useState } from "react";

const Gallery = ({ pictures }) => {
  const [curentIndex, setCurentIndex] = useState(0); //The React useState Hook allows us to track state in a function component.

  //flèche de droite
  const handleRotationRight = () => {
    const totalLength = pictures.length;
    if (curentIndex + 1 === totalLength) {
      //on vérifie si l'index dépasse le total, si oui on retourne à 0, première image
      setCurentIndex(0);

      return;
    }
    const newIndex = curentIndex + 1;

    setCurentIndex(newIndex);
  };
  //flèche de gauche
  const handleRotationLeft = () => {
    const totalLength = pictures.length;
    if (curentIndex === 0) {
      setCurentIndex(totalLength - 1);
      return;
    }
    const newIndex = curentIndex - 1;
    setCurentIndex(newIndex);
  };
  return (
    <div className="wrapper-images">
      <span className="left-arrow" onClick={handleRotationRight}>
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </span>
      <img src={pictures[curentIndex]} alt="logement" />
      <span className="right-arrow" onClick={handleRotationLeft}>
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  );
};

export default Gallery;
