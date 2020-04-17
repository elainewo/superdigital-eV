import React from "react";
import image3 from "../Vector.png";
import "./chancen.css";

const Chancen = () => {
  return (
    <div className="chancenItem">
      <h2>Neue Chancen durch digitale Bildung!</h2>
      <img src={image3} alt=""></img>
      <button className="cool-button2">erfahre mehr</button>
    </div>
  );
};

export default Chancen;
