import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Erreur = () => {
  return (
    <div>
      <Navigation />
      <div className="centered">
        <h1>404</h1>
      </div>
      <p>Oups! La page que vous demandez n'éxiste pas.</p>
      <div className="navlink">
        <NavLink to="/">Retourner sur la page d'accueil.</NavLink>
      </div>
    </div>
  );
};

export default Erreur;
