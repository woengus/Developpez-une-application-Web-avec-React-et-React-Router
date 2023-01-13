import React from "react";
import logo from "../assets/LOGO_footer.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de l'application" className="logo" />
      <h3 className="title-footer">© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
};

export default Footer;
