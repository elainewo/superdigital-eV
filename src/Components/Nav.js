import React, { useState } from "react";
import "./nav.css";
import logo from "../superdigital.xyz.png";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Nav = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>

        <nav className="navigation-items">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#beitraege">Projekte</a>
            </li>
            <li>
              <a href="#uebermich">Über Mich</a>
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
              height: "65%",
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

export default Nav;
