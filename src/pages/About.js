import React from "react";
import Dropdown from "../components/Dropdown";
import Background from "../assets/Background_about.png";
const About = () => {
  return (
    <div className="contenu">
      <img
        src={Background}
        alt="background d'une montagne"
        className="background-about"
      />
      <div className="dropdown-about">
        <Dropdown
          title={"Fiabilité"}
          text={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
        <Dropdown
          title={"Respect"}
          text={
            "La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera uen exclusion de notre plateforme."
          }
        />
        <Dropdown
          title={"Service"}
          text={
            "Nes équipes se tiennent à votre disposition pour vous forunir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Dropdown
          title={"Sécurité"}
          text={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond auxcritères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
};

export default About;
