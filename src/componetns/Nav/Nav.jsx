import React from "react";
import s from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Link to="/profile">Profile</Link>
      </div>
      <div className={s.item}>
        <Link to="/dialogs">Messages</Link>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
