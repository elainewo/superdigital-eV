import React, { Component } from "react";
import { contact } from "./Data";
import "./detailBeitrag.css";
class DetailBeitrag extends Component {
  state = { index: 0 };

  componentDidMount() {
    this.setState({ index: this.props.match.params.id });
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="karte">
        <article className="karteItem">
          <h2>{contact[this.state.index].titel}</h2>
          <h4>{contact[this.state.index].datum}</h4>
          <p>{contact[this.state.index].beschreibungLang}</p>
        </article>
        <img src={contact[this.state.index].image} alt=""></img>
      </div>
    );
  }
}

export default DetailBeitrag;
