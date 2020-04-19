import React from "react";
import "./sideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="#home">Home</a>
        </li>
        <li><a href="#beitraege">Projekte</a>
        </li>
        <li><a href="#uebermich">Über Mich</a></li>
        <li className="kontakt">Kontakt</li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
