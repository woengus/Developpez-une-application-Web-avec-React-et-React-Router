import React from "react";
import logements from "../logements.json";

const Card = () => {
  return (
    <div>
      {logements.map((logement) => (
        <div key={logement.id}>
          <h1>{logement.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
