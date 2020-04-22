import React from "react";
import "./SpendenPopup.css";
const SpendenPopup = (props) => {
  return (
    <div
      className="spenden-popup"
      style={{ display: props.show ? "block" : "none" }}
    >
      <div className="spenden-popup-inner">
        <h1>Unsere Bankverbindung für ihre Spende </h1>
        <p>Iban: DE 1234 1234 1234 1234 12</p>
        <p>Vielen Dank im Voraus für die Unterstützung</p>
        <button className="close2" onClick={props.handleSpenden}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SpendenPopup;
