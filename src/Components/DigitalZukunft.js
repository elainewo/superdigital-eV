import React, { Component } from 'react';
import './digitalzukunft.css'

class DigitalZukunft extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="digitalZukunft">
                    <div>
                        <img className="trainerbild" src="/images/bild6.png" alt="trainer-img" />

                        <div className="brush">
                            <img src="/images/Vector0.svg" alt="" />
                            <img src="/images/Vector1.svg" alt="" />
                            <img src="/images/Vector2.svg" alt="" />
                            <img src="/images/Vector3.svg" alt="" />
                            <img src="/images/Vector4.svg" alt="" />
                            <img className="brush2" src="/images/Vector5.svg" alt="" />
                            <img src="/images/Vector6.svg" alt="" />
                        </div>
                        <img className="gruppenbild" src="/images/Bild1.png" alt="gruppen-img" />
                    </div>
                    <article>
                        <h2>Unsere Zukunft ist nicht in Stein gemeißelt - <span>
                            Wir können und wollen Einfluss darauf nehmen, wie diese aussieht!</span></h2>
                        <p>Die Zukunft ist digital, ein kompetenter Umgang mit digitalen Medien ist ausschlaggebend. Wir sind davon überzeugt, dass Kinder und Jugendliche mündige Bürger*innen der Welt von morgen werden sollen und möchten dazu beitragen, dass sie digitale, kreative und problemlösende Kompetenzen erlernen
                    </p>
                    </article>

                </section>
                <div class="l-section-top">
                    <a href="#" class="c-title"><p>so arbeiten wir</p></a>

                    <div class="c-scrolldown">
                        <div class="c-line"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DigitalZukunft;