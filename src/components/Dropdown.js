import React, { useState } from "react";
import icon from "../assets/up_arrow.svg";
import icon2 from "../assets/down_arrow.svg";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  if (open === true) {
    return (
      <div className="dropdown-menu">
        <div className="dropdown-title">
          <h2>{props.title}</h2>
          <img
            src={icon}
            alt="flêche fermeture"
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
  } else {
    return (
      <div className="dropdown-menu">
        <div className="dropdown-title">
          <h2>{props.title}</h2>
          <img
            src={icon2}
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
  }
};

export default Dropdown;
