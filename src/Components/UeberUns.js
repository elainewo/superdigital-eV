import React, { Component } from 'react';
import './ueberuns.css';
import {
    Link
} from "react-router-dom";


class UeberUns extends Component {
    state = {}
    render() {
        return (
            <section className="ueberUns">
                <h2>Das sind wir!</h2>
                <div className="ueberuns-container">
                    <article>
                        <div className="img-bg">
                            <img src="/images/people.png" alt="" />
                        </div>
                        <div>
                            <p>Vorstand</p>
                            <h4>Lisa Nüßlein</h4>
                            <Link to="/ueberunsitem"><svg id="arrow" width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0L0 4.5Z" fill="black" />
                            </svg></Link>
                        </div>
                    </article>
                    <div className="ueberuns-text">
                        <h3>Das ist uns wichtig</h3>
                        <img className="brush-img" src="/images/Vector.svg" alt="" />
                        <p>> Wir stehen für chancengleiche Bildung für Alle</p>
                        <p>> Die Zukunft birgt viele Chancen, die wir gemeinsam positiv nutzen wollen</p>
                        <p>> Wir möchten Mädchen und Jungen gleichermaßen stark machen</p>
                        <p>> Für uns ist Zusammenarbeit der Schlüssel zum Erfolg</p>
                        <p>> Wohnort & Herkunft dürfen keinen Einfluss auf Bildungsqualität haben</p>
                        <p>> Wir haben Mut zum Neudenken und trauen uns alte Muster zu verlassen</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default UeberUns;