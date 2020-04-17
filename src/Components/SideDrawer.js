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
        <li>Home</li>
        <li>Projekte</li>
        <li>Über Mich</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
