import React from "react";
import { Link } from "react-router-dom";

import image from "../Rectangle 30.png";
import image2 from "../Arrow 4.svg";

const BeiträgeItems = (props) => {
  return (
    <div className="beitägeItem">
      <section className="items">
        <h2>{props.titel}</h2>
        <p>{props.datum}</p>
        <img src={image} alt=""></img>
        <p className="beschreibung">{props.beschreibung}</p>
        <Link to={`/${props.id}`}>
          <img src={image2} alt=""></img>
        </Link>
      </section>
    </div>
  );
};

export default BeiträgeItems;
