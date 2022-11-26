import React from "react";
import logo from "./log.png";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="Logo.png" />
    </header>
  );
};

export default Header;
