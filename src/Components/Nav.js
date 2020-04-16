import React from "react";
import "./nav.css";
import logo from "../superdigital.xyz.png";

const Nav = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Projekte</li>
            <li>Über Mich</li>
            <li className="kontakt">Kontakt</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
