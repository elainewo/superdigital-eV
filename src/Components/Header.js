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
            headline="Wieviel Mensch"
            thin="braucht "
            second="Digital?"
          />
        </article>
      </div>
      <div className="strich"></div>
    </div>
  );
};

export default Header;
