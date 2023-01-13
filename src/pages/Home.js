import React from "react";

import Card from "../components/Card";
import logements from "../logements.json";

const Home = () => {
  return (
    <div>
      <div className="background">
        <h1 className="home-title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards">
        {logements.map((logement) => (
          <Card logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;
