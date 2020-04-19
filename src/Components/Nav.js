import React, { useState } from "react";
import "./nav.css";
import logo from "../superdigital.xyz.png";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>

        <nav className="navigation-items">
          <ul>
            <li>Home</li>
            <li>Projekte</li>
            <li>Über Mich</li>
            <button className="modal" onClick={() => setModalIsOpen(true)}>
              <li className="kontakt">Kontakt</li>
            </button>
            {/* <li><a href="#home">Home</a>
            </li>
            <li><a href="#beitraege">Projekte</a>
            </li>
            <li><a href="#uebermich">Über Mich</a></li>
            <li className="kontakt">Kontakt</li> */}
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
          <p>
            <label className="daten">Name</label>
            <input
              className="input"
              type="name"
              name=""
              id=""
              placeholder="Vor- und Nachname"
            />
          </p>
          <p>
            <label className="daten">Email Adress</label>
            <input
              className="input"
              type="email"
              name=""
              id=""
              placeholder="Hier dein Email"
            />
          </p>
          <p>
            <label className="daten">Nachricht</label>
            <input
              className="input"
              type="text"
              name=""
              id=""
              placeholder="Schreib uns deine Nachricht"
            />
          </p>
          <div className="submit">
            <button className="cool-button4">Senden</button>
          </div>
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
