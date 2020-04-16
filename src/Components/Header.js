import React from "react";
import Nav from "./Nav";
import HeaderItem from "./HeaderItem";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Nav />
        <article className="head-titel">
          <HeaderItem
            headline1="Wieviel "
            headline2="Mensch"
            headline3="Digital"
            thin="braucht "
            second1="Digital?"
            second2="Mensch?"
          />
        </article>
      </div>
      <div className="strich"></div>
    </div>
  );
};

export default Header;
