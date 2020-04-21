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
                        <img className="brushes" src="/images/yellow-stripes.png" alt="" />
                        <img className="gruppenbild" src="/images/Bild1.png" alt="gruppen-img" />
                    </div>
                    <article>
                        <h2>Wir leben in einer digitalen Gesellschaft - lasst sie uns gemeinsam gestalten!</h2>
                        <p>Im Zentrum der Arbeit von SuperDigital steht die Vermittlung digitaler Fähigkeiten sowie Wissen zur selbstbestimmten Teilhabe. Dafür geben wir Workshops, erarbeiten neue Bildungskonzepte und Inhalte und diskutieren mit Expert:innen über die digitale Zukunft unserer Gesellschaft. Außerdem verstehen wir uns als Plattform für Austausch und Vernetzung.
                    </p>
                    </article>

                </section>
                <div class="l-section-top">
                    <p>so arbeiten wir</p>

                    <div class="c-scrolldown">
                        <div class="c-line"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DigitalZukunft;