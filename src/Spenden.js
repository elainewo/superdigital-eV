import React, { Component } from "react";
import "./Spenden.css";
import SpendenPopup from "./SpendenPopup";
import Partnerschaft from "./Partnerschaft";
// import Modal from "react-modal";
// import { FaArrowLeft } from "react-icons/fa";
// Modal.setAppElement("#root");

// function Spenden() {
//   return (
//     <div className="SpendenSection">
//       <h1>Mach mit!</h1>
//       <div className="SpendenTxtDiv">
//         <p> Mit einem kleinen Team und großen Netzwerk engagieren wir uns für ein freies Internet und eine offene digitale Gesellschaft. Um unsere Arbeit fortzusetzen und auszubauen, brauchen wir eure Unterstützung. Wir freuen uns über Eure Spende und Partnerschaft:</p>
//         <div>
//           <button className="SpendenBtn Spen" >Spenden</button>
//           <button className="SpendenBtn" >Partnerschaft</button>
//         </div>
//       </div>
//     </div>
//   );
// }
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Spenden extends Component {
  state = {
    spenden: false,
    patnerschaft: false,
    name: "",
    email: "",
    message: "",
  };
  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSpenden = () => {
    this.setState({ spenden: !this.state.spenden });
  };
  handlePartnerschaft = () => {
    this.setState({ patnerschaft: !this.state.patnerschaft });
  };
  render() {
    return (
      <div className="SpendenSection">
        <div className="triDiv"></div>
        <h1>Mach mit!</h1>
        <div className="SpendenTxtDiv">
          <p>
            {" "}
            Mit einem kleinen Team und großen Netzwerk engagieren wir uns für
            ein freies Internet und eine offene digitale Gesellschaft. Um unsere
            Arbeit fortzusetzen und auszubauen, brauchen wir eure Unterstützung.
            Wir freuen uns über Eure Spende und Partnerschaft:
          </p>
          <div>
            <button
              className="SpendenBtn Spen btn-11"
              onClick={this.handleSpenden}
            >
              Spenden
            </button>
            <button
              className="SpendenBtn btn-11"
              onClick={this.handlePartnerschaft}
            >
              Partnerschaft
            </button>
          </div>
        </div>
        <SpendenPopup
          handleSpenden={this.handleSpenden}
          show={this.state.spenden}
        />
        <Partnerschaft
          handlePartnerschaft={this.handlePartnerschaft}
          show={this.state.patnerschaft}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Spenden;
