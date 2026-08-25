import React from "react";
import darklogo from "./goldlogo.png"
import logo from "./logo.png"
const NavLogo = () => {
  return (
    <div className="new-logo-container">
      <img src={logo} alt="ambaniexchange" className="new-logo-desktop-img " />
      <img src={darklogo} alt="ambaniexchange" className="new-logo-mobile-img " />
    </div>
  );
};

export default NavLogo;
