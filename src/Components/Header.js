import React from "react";
import Nav from "./Nav";
import HeaderItem from "./HeaderItem";
import "./header.css";
import "./digitalzukunft.css";
import DrawerToggleButton from "./DrawerToggleButton";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <Nav />
        <div className="toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
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
      <div class="c-scrolldown">
        <div class="c-line"></div>
      </div>
    </div>
  );
};

export default Header;
