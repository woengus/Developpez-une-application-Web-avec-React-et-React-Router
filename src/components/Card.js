import React from "react";

const Card = ({ logement }) => {
  return (
    <div
      id={logement.id}
      className="card"
      style={{ backgroundImage: `url(${logement.cover})` }}
    >
      <span className="card-title-span">
        <h2 className="card-title">{logement.title}</h2>
      </span>
    </div>
  );
};

export default Card;
