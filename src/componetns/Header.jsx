import React from "react";
import logo from "../log.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo.png" />
    </header>
  );
};

export default Header;
