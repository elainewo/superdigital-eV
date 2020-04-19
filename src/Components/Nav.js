import React from "react";
import "./nav.css";
import logo from "../superdigital.xyz.png";
import {
  Link
} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>

        <nav className="navigation-items">
          <ul>
            <li><a href="#home">Home</a>
            </li>
            <li><a href="#beitraege">Projekte</a>
            </li>
            <li><a href="#uebermich">Über Mich</a></li>
            <li className="kontakt">Kontakt</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
