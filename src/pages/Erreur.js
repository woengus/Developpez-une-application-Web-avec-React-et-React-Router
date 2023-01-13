import React from "react";

const Erreur = () => {
  return (
    <div>
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
