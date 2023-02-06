import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Stars from "../components/Stars";
import logements from "../logements.json";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find((element) => {
    return element.id === id;
  });
  useEffect(() => {
    if (logement === undefined) {
      navigate("/404");
    }
    //création du rating du logement
  }, []); //le [] sert à lancer le useEffect une fois, au lancement du composant

  const equipements = logement.equipments;
  //map des equipements
  equipements.map((data) => {
    return (
      <div key={data} className="equipement">
        {data}
      </div>
    );
  });
  //map des tags
  const tags = logement.tags;
  tags.map((data) => {
    return (
      <div className="tags" key={data}>
        {data}
      </div>
    );
  });
  //handleClick

  const [curentIndex, setCurentIndex] = useState(0);

  //flèche de gauche
  const handleRotationRight = () => {
    const totalLength = logement.pictures.length;
    if (curentIndex + 1 === totalLength) {
      //on vérifie si l'index dépasse le total, si oui on retourne à 0, première image
      setCurentIndex(0);

      return;
    }
    const newIndex = curentIndex + 1;

    setCurentIndex(newIndex);
  };
  //flèche de droite
  const handleRotationLeft = () => {
    const totalLength = logement.pictures.length;
    if (curentIndex === 0) {
      setCurentIndex(totalLength - 1);

      return;
    }
    const newIndex = curentIndex - 1;

    setCurentIndex(newIndex);
  };
  return (
    <div className="logement">
      <div className="background-logement">
        <div className="background-flex">
          <div className="background-img">
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
              <img src={logement.pictures[curentIndex]} alt="logement" />
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
          </div>
        </div>
        <div className="title-logement">{logement.title}</div>
        <div className="flex-information-logement">
          <div className="town-logement">{logement.location}</div>
          <div className="host-name">{logement.host.name}</div>
          <div className="host-picture">
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>

        <div className="flex-logement-town-stars">
          <div>{tags}</div>
          <Stars rating={logement.rating} />
        </div>

        <div className="flex-logement">
          <div className="description-full">
            <Dropdown title={"Description"} text={logement.description} />
          </div>
          <div className="equipements-full">
            <div className="equipements-full">
              <Dropdown title="Equipements" text={equipements} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logement;
