import React, { Component } from 'react';
import image3 from "../Vector.png";
import "./chancen.css";


class Chancen extends Component {
  state = {}
  handleClick = () => {
    window.scrollBy(0, 700);
  }
  render() {
    return (
      <section className="chancen-container">
        <div className="chancenItem">
          <h2>Neue Chancen durch digitale Bildung!</h2>
          <img src={image3} alt=""></img>
          <button onClick={this.handleClick} className="cool-button2 btn-11">erfahre mehr</button>
        </div>
      </section>
    );
  }
}

export default Chancen;

