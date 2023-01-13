import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <img src={logo} alt="Logo de l'application" className="logo" />
      </NavLink>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/About"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
