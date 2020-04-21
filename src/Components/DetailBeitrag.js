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
              width="40"
              height="40"
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
          <p className="datum">{contact[this.state.index].datum}</p>
          <h5 className="überschrift">{contact[this.state.index].titel}</h5>

          {/* <img className="strich1" src={image} alt=""></img> */}
          {/* <div>
            <a href="#">
              <FaInstagram size="2rem" />
            </a>
            <a href="#">
              <FaLinkedin size="2rem" />
            </a>
            <a href="#">
              <FaFacebookSquare size="2rem" />
            </a>
          </div> */}
          <h3 className="beschreibung">
            {contact[this.state.index].beschreibung}
          </h3>
          <h3>{contact[this.state.index].überschrift1}</h3>
          <p>{contact[this.state.index].detail1a}</p>
          <p>{contact[this.state.index].detail1b}</p>
          <p>{contact[this.state.index].detail1c}</p>
          <h3>{contact[this.state.index].überschrift2}</h3>
          <p>{contact[this.state.index].detail2a}</p>
          <p>{contact[this.state.index].detail2b}</p>
          <p>{contact[this.state.index].detail2c}</p>
          <p>{contact[this.state.index].detail2d}</p>
          <h3>{contact[this.state.index].trainer}</h3>
          <p>{contact[this.state.index].trainer1}</p>
          <p>{contact[this.state.index].trainer2}</p>
          <p>{contact[this.state.index].trainer3}</p>
          <h3>{contact[this.state.index].überschrift3}</h3>
          <p>{contact[this.state.index].detail3}</p>
          <h3>{contact[this.state.index].überschrift4}</h3>
          <p>{contact[this.state.index].detail4}</p>
          <h3>{contact[this.state.index].überschrift5}</h3>
          <p>{contact[this.state.index].detail5}</p>
          <div className="wrapper">
            <button className="cool-button3 btn-11" href="#contained-buttons">
              <a
                href="https://www.eventbrite.de/e/webinar-html-css-workshop-fur-anfanger-tickets-102889543394?discount=superdigital"
                target="blank"
              >
                Tickets
              </a>
            </button>
            <button className="cool-button3 btn-11">
              <a href="https://www.super-code.de/" target="blank">
                Webseite
              </a>
            </button>
          </div>
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
