import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import logements from "../logements.json";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="background">
        <h1 className="home-title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards">
        {logements.map((logement) => (
          <div
            id={logement.id}
            className="card"
            style={{ backgroundImage: `url(${logement.cover})` }}
          >
            <span className="card-title-span">
              <h2 className="card-title">{logement.title}</h2>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
