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
        <a href="/" className="nav-active">
          Retourner sur la page d'accueil.
        </a>
      </div>
    </div>
  );
};

export default Erreur;
