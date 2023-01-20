import React, { useState } from "react";
import icon from "../assets/icons8-chevron-haut-30.png";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown-menu">
      <div className="dropdown-title">
        <h2>{props.title}</h2>
        <img
          src={icon}
          alt="flêche ouverture"
          className="icon"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open ? (
        <div className="dropdown-text">
          <p>{props.text}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
