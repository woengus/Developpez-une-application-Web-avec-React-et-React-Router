import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Left_arrow from "../assets/left-arrow.svg";
import Right_arrow from "../assets/right-arrow.svg";
import logements from "../logements.json";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const logement = logements.find((element) => {
    return element.id === id;
  });
  useEffect(() => {
    console.log(logement);
    if (logement === undefined) {
      navigate("/404");
    }
  }, [id]); //le [] sert à lancer le useEffect une fois, au lancement du composant
  return (
    <div>
      <div className="background-logement">
        <div>
          <img src={Left_arrow} alt="flêche de gauche" className="left-arrow" />
        </div>
        <div className="background-img">
          <img src={logement.cover} />
        </div>
        <div className="right-arrow">
          <img
            src={Right_arrow}
            alt="flêche de droite"
            className="right-arrow"
          />
        </div>
        <div className="title-logement">{logement.title}</div>
        <div className="flex-information-logement">
          <div className="town-logement">{logement.location}</div>
          <div className="host-name">{logement.host.name}</div>
          <div className="host-picture">
            <img src={logement.host.picture} alt="image de l'hôte" />
          </div>
        </div>

        <div className="flex-logement-town-stars">
          <div className="tags">{logement.tags}</div>
          <div className="stars">{logement.rating}étoiles</div>
        </div>

        <div className="flex-logement">
          <div className="description-logement">{logement.description}</div>
          <div className="equipement-logement">{logement.equipements}</div>
        </div>
      </div>
    </div>
  );
};

export default Logement;
