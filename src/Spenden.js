import React from 'react';
import './Spenden.css';

function Spenden() {
  return (


    <div className="SpendenSection">
      <h1>Mach mit!</h1>
      <div>

     
      <p> Mit einem kleinen Team und großen Netzwerk engagieren wir uns für ein freies Internet und eine offene digitale Gesellschaft. Um unsere Arbeit fortzusetzen und auszubauen, brauchen wir eure Unterstützung. Wir freuen uns über Eure Spende und Partnerschaft:</p> 
     
      <div> 
        <button className="SpendenBtn" >Spenden</button>
        <button className="SpendenBtn" >Spenden</button>
        {/* <input className="SpendenBtn" type="button" value="Spenden" onclick="spendenBtn"/>
        <input className="SpendenBtn" type="button" value="Spenden" onclick="spendenBtn"/> */}
  
      </div>
      </div>
    </div>


  );
}


export default Spenden;