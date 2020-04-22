import React, { useState } from "react";
import "./sideDrawer.css";
import {
  FaArrowLeft,
  FaCommentDots,
  FaHome,
  FaHashtag,
  FaAngleDoubleDown,
  FaAlignLeft,
  FaAt,
  FaBook,
} from "react-icons/fa";
import Modal from "react-modal";
Modal.setAppElement("#root");

const SideDrawer = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div>
      <nav className={drawerClasses}>
        <ul>
          <li>
            <a href="#home">
              <FaHome size="1.5rem" />
              <span className="icon1">Home</span>
            </a>
          </li>
          <li>
            <a href="#beitraege">
              <FaAt size="1.5rem" />
              <span className="icon1">Projekte</span>
            </a>
          </li>
          <li>
            <a href="#uebermich">
              {" "}
              <FaAngleDoubleDown size="1.5rem" />
              <span className="icon1">Über Uns</span>
            </a>
          </li>

          <li>
            <a href="#home">
              <FaAlignLeft size="1.5rem" />
              <span className="icon1">Impressum</span>
            </a>
          </li>
          <li>
            <a href="#beitraege">
              <FaHashtag size="1.5rem" />
              <span className="icon1">DSGVO</span>
            </a>
          </li>
          <li>
            <a href="#uebermich">
              <FaBook size="1.5rem" />
              <span className="icon1">Satzung</span>
            </a>
          </li>
          <button className="modal1" onClick={() => setModalIsOpen(true)}>
            <li className="kontakt1">
              <FaCommentDots size="1.5rem" />
              <span className="icon1">Kontakt</span>
            </li>
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
            opacity: ".95",
          },
          content: {
            width: "60%",
            height: "50%",
            margin: "auto",
          },
        }}
      >
        <h2>Mit uns in Kontakt treten</h2>
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
          <label className="daten">Email Adresse</label>
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
            zurück
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SideDrawer;
