import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./Partnerschaft.css";

const Partnerschaft = (props) => {
  return (
    <div
      className="partnerschaft-popup"
      style={{ display: props.show ? "block" : "none" }}
    >
      <div className="partnerschaft-popup-inner">
        <h2>Werde Partner in unserem Netzwerk</h2>
        <p>
          Für eine Partnerschaft, kannst du uns über das Formular erreichen.
        </p>
        <h3 className="kontact">Partnerschaft</h3>
        <form onSubmit={props.handleSubmit} name="contact">
          <p>
            <label className="daten">Name</label>
            <input
              value={props.name}
              onChange={props.handleChange}
              className="input"
              type="name"
              name="name"
              id=""
              placeholder="Vor- und Nachname"
            />
          </p>
          <p>
            <label className="daten">Email Adress</label>
            <input
              value={props.email}
              onChange={props.handleChange}
              className="input"
              type="email"
              name="email"
              id=""
              placeholder="Hier dein Email"
            />
          </p>
          <p>
            <label className="daten">Nachricht</label>
            <input
              value={props.message}
              onChange={props.handleChange}
              className="input"
              type="text"
              name="message"
              id=""
              placeholder="Schreib uns deine Nachricht"
            />
          </p>
          <div className="submit">
            <button className="cool-button4 btn-11">Senden</button>
          </div>
        </form>
        <div>
          <button className="close2" onClick={props.handlePartnerschaft}>
            <FaArrowLeft size="2rem" />
            zurück
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partnerschaft;
