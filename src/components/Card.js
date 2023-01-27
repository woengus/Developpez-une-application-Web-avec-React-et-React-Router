import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <div
      id={logement.id}
      className="card"
      style={{ backgroundImage: `url(${logement.cover})` }}
    >
      <NavLink to={`logement/${logement.id}`}>
        <span className={`card-title-span ${logement.id}`}>
          <h2 className="card-title">{logement.title}</h2>
        </span>
      </NavLink>
    </div>
  );
};

export default Card;
