import React from 'react';
import './SpendenPopup.css'
const SpendenPopup = (props) => {
    return (
        <div className="spenden-popup" style={{ display: props.show ? "block" : "none" }}>
            <div className="spenden-popup-inner">
                <h1>Hier ist unserer Bankdaten da können Sie spenden </h1>
                <p>Iban: DE 1234 1234 1234 1234 12</p>
                <button className="close" onClick={props.handleSpenden}>Close</button>
            </div>
        </div>
    );
}

export default SpendenPopup;