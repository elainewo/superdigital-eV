import React, { useState } from "react";
import "./footerNav.css";

import {
  FaArrowLeft,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import Modal from "react-modal";
Modal.setAppElement("#root");

const FooterNav = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="logo">
          <div className="socialNet">
            <div className="sozial">
              <a href="#">
                <FaInstagram size="2rem" />
              </a>
              <a href="#">
                <FaLinkedin size="2rem" />
              </a>
              <a href="#">
                <FaFacebookSquare size="2rem" />
              </a>
            </div>
            <button className="modal3" onClick={() => setModalIsOpen(true)}>
              <li className="kontakt">Kontakt</li>
            </button>
          </div>
        </div>

        <nav className="navigation-items">
          <ul>
            <li>
              <a className="untenLink" href="#home">
                Impressum
              </a>
            </li>
            <li>
              <a className="untenLink" href="#beitraege">
                DSGVO
              </a>
            </li>
            <li>
              <a className="untenLink" href="#uebermich">
                Satzung
              </a>
            </li>
            <button className="modal" onClick={() => setModalIsOpen(true)}>
              <li className="kontakt">Kontakt</li>
            </button>
          </ul>
        </nav>
        <Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              background: "grey",
              opacity: ".8",
            },
            content: {
              width: "60%",
              height: "60%",
              margin: "auto",
            },
          }}
        >
          <h2>Mit Uns in Kontakt treten</h2>
          <p>
            Wenn du Fragen oder Anregungen hast, kannst du uns über das Formular
            erreichen.
          </p>
          <h3 className="kontact">Kontakt</h3>
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
              <button className="cool-button4">Senden</button>
            </div>
          </form>
          <div>
            <button className="close" onClick={() => setModalIsOpen(false)}>
              <FaArrowLeft size="2rem" />
              zurück / or press ESC
            </button>
          </div>
        </Modal>
      </header>
    </div>
  );
};

export default FooterNav;
