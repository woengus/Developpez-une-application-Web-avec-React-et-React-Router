import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import "../styles/index.scss";
const Erreur = () => {
  return (
    <div>
      <Navigation />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'éxiste pas.</p>
      <NavLink to="/">Retourner sur la page d'accueil.</NavLink>
    </div>
  );
};

export default Erreur;
