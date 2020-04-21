import React, { Component } from "react";
import "./Wirkung.css";

const data = [
  { title: "Wirkungsbereiche:", text: "Fähigkeiten und Wissen: Welche Fähigkeiten brauchen wir in einer digitalen Zukunft, privat und für den Beruf? Wie können diese Fähigkeiten vermittelt werden, wie sieht das Lernen der Zukunft aus? Selbstbestimmung und Partizipation: Wie funktioniert unsere digitale Gesellschaft? Welchen Einfluss hat Digitalisierung auf uns? Wie können wir diese beeinflussen und wird die Teilhabe und aktive Mitgestaltung gefördert?ZukunftDigital_DoIT: Begeistern, ausprobieren, lernen, anwenden. Vom Nutzen zum Gestalten.", imgSrc: "./img/Bild1.png" }, { title: "Wirkungsziele:", text: "Die Zukunft der Bildung gestalten: digitales Lernen und Digitalbildung- Kompetenzen und Wissen vermitteln: für eine kritische, aktive, selbstbestimmte Teilhabe in einer digitalen Welt- Vom Nutzen zum Gestalten: Digitale Alphabetisierung- Digitale Teilhabe für alle, unabhängig von Herkunft, Geschlecht, Religionszugehörigkeit, Alter etc.", imgSrc: "./img/Bild2.png" }, { title: "Zusammenarbeit:", text: "Schulen: Welche Fähigkeiten brauchen wir in einer digitalen Zukunft, privat und für den Beruf? Wie können diese Fähigkeiten vermittelt werden, wie sieht das Lernen der Zukunft aus? Behörden: Wie funktioniert unsere digitale Gesellschaft? Welchen Einfluss hat Digitalisierung auf uns? Wie können wir diese beeinflussen und wird die Teilhabe und aktive Mitgestaltung gefördert? Vereine / Unternehmen:Begeistern, ausprobieren, lernen, anwenden. Vom Nutzen zum Gestalten", imgSrc: "./img/Bild3.png" }
]

class Wirkung extends Component {
  state = { index: 0, index2: 1 };
  handleLeft = () => {
    switch (this.state.index) {
      case 0:
        this.setState({ index: 2, index2: 0 });
        break;
      case 1:
        this.setState({ index: 0, index2: 1 });
        break;
      case 2:
        this.setState({ index: 1, index2: 2 });
        break;
    }
  };
  handleRight = () => {
    switch (this.state.index) {
      case 0:
        this.setState({ index: 1, index2: 2 });
        break;
      case 1:
        this.setState({ index: 2, index2: 0 });
        break;
      case 2:
        this.setState({ index: 0, index2: 1 });
        break;
    }

  }
  render() {
    return (
      <div className="Wirkung">
        <section className="WirkungSection">
          <article className="textArticle">
            <h2 className="uuh1">{data[this.state.index].title}</h2>
            <p>{data[this.state.index].text}</p>
            <div className="wirkungsBtnDiv" >
              <button className="wirkLeft Btn" onClick={this.handleLeft}> &larr; </button>
              <button className="wirkRight Btn" onClick={this.handleRight}> &rarr; </button>
            </div>
          </article>
          <article className="imgArticle">
            <img  src={data[this.state.index].imgSrc} alt="" />
            <img  src={data[this.state.index2].imgSrc} alt="" />
          </article>
        </section>
      </div>
    );
  }
}

export default Wirkung;
