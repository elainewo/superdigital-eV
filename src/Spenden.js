import React, { Component } from 'react';
import './Spenden.css';
import SpendenPopup from './SpendenPopup'
import Partnerschaft from './Partnerschaft'

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

class Spenden extends Component {
  state = {
    spenden: false, patnerschaft: false
  }
  handleSpenden = () => {
    this.setState({ spenden: !this.state.spenden });
  }
  handlePartnerschaft = () => {
    this.setState({ patnerschaft: !this.state.patnerschaft });
  }
  render() {
    return (
      <div className="SpendenSection">
        <h1>Mach mit!</h1>
        <div className="SpendenTxtDiv">
          <p> Mit einem kleinen Team und großen Netzwerk engagieren wir uns für ein freies Internet und eine offene digitale Gesellschaft. Um unsere Arbeit fortzusetzen und auszubauen, brauchen wir eure Unterstützung. Wir freuen uns über Eure Spende und Partnerschaft:</p>
          <div>
            <button className="SpendenBtn Spen" onClick={this.handleSpenden}>Spenden</button>
            <button className="SpendenBtn" onClick={this.handlePartnerschaft}>Partnerschaft</button>
          </div>
          <SpendenPopup handleSpenden={this.handleSpenden} show={this.state.spenden} />
          <Partnerschaft handlePartnerschaft={this.handlePartnerschaft} show={this.state.patnerschaft} />
        </div>
      </div>
    );
  }
}




export default Spenden;