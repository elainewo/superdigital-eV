import React, { Component } from "react";
import { contact } from "./Data";
import "./detailBeitrag.css";
import image from "../Rectangle 30.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./ueberunsitem.css";
import { Link } from "react-router-dom";
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
          <Link className="link" to="/">
            <svg
              id="close-svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.0186"
                cy="12.0186"
                r="8"
                transform="rotate(46.1014 12.0186 12.0186)"
                stroke="black"
              />
              <line
                x1="8.20464"
                y1="8.05547"
                x2="15.8319"
                y2="15.9817"
                stroke="black"
              />
              <line
                x1="8.05529"
                y1="15.8322"
                x2="15.9815"
                y2="8.205"
                stroke="black"
              />
            </svg>
          </Link>

          <h2>{contact[this.state.index].titel}</h2>
          <h4>{contact[this.state.index].datum}</h4>
          <img className="strich1" src={image} alt=""></img>
          <div>
            <a href="#">
              <FaInstagram size="2rem" />
            </a>
            <a href="#">
              <FaLinkedin size="2rem" />
            </a>
            <a href="#">
              <FaFacebookSquare size="2rem" />
            </a>
          </div>
          <p>{contact[this.state.index].beschreibungLang}</p>
        </article>
        <img
          className="bildKarte"
          src={contact[this.state.index].image}
          alt=""
        ></img>
      </div>
    );
  }
}

export default DetailBeitrag;
