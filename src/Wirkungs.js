import React, { Component } from "react";
import "./Wirkung.css";

const data = [
  {
    title: "Title1",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ipsa voluptatibus sapiente aspernatur eaque officia, neque omnis! Dicta maxime eos dolorem, modi repellat veniam possimus beatae tempore. Exercitationem soluta magnam repellat nostrum aliquid, voluptate a, vel odit necessitatibus at id quaerat? Praesentium, quam architecto et necessitatibus in quo eum at.",
    imgSrc: "./img/Bild1.png",
  },
  {
    title: "Titel2",
    text:
      "Lorem ipsu m dolor, sit amet  consectetur adipisicing elit. Deserunt ipsa voluptatibus sapiente aspernatur eaque officia, neque omnis! Dicta maxime eos dolorem, modi repellat veniam possimus beatae tempore. Exercitationem soluta magnam repellat nostrum aliquid, voluptate a, vel odit necessitatibus at id quaerat? Praesentium, quam architecto et necessitatibus in quo eum at.",
    imgSrc: "./img/Bild2.png",
  },
  {
    title: "Titel3",
    text:
      "Lorem ipsu m dolor, sit amet  consectetur adipisicing elit. Deserunt ipsa voluptatibus sapiente aspernatur eaque officia, neque omnis! Dicta maxime eos dolorem, modi repellat veniam possimus beatae tempore. Exercitationem soluta magnam repellat nostrum aliquid, voluptate a, vel odit necessitatibus at id quaerat? Praesentium, quam architecto et necessitatibus in quo eum at.",
    imgSrc: "./img/Bild3.png",
  },
];

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
  };
  render() {
    return (
      <div className="Wirkung">
        <section className="WirkungSection">
          <article className="textArticle">
            <h1 className="uuh1">{data[this.state.index].title}</h1>
            <p style={{ width: "400px", marginLeft: "7rem" }}>
              {data[this.state.index].text}
            </p>
            <button onClick={this.handleLeft}>Links</button>
            <button onClick={this.handleRight}>Rechts</button>
          </article>
          <article className="imgArticle">
            <img
              style={{ width: "60%", height: "50vh" }}
              src={data[this.state.index].imgSrc}
              alt=""
            />
            <img
              style={{ width: "60%", height: "50vh" }}
              src={data[this.state.index2].imgSrc}
              alt=""
            />
          </article>
        </section>
      </div>
    );
  }
}

export default Wirkung;
