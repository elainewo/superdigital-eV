import React, { Component } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./ueberunsitem.css";
import { Link } from "react-router-dom";

class UeberUnsItem extends Component {
  state = {};
  render() {
    return (
      <section className="uberunsItem">
        <article>
          <div className="ueberuns-header-mobile">
            <img src="/images/superdigital.xyz.png" alt="" />
            <button className="kontakt">Kontakt</button>
          </div>
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
          <img
            className="vorstand-img-mobile"
            src="/images/people.png"
            alt=""
          />
          <p>Vorstand</p>
          <h3>Lisa Nüßlein</h3>
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
          <p>
            Ich begeistere ich mich für den Schnittpunkt von Digitalisierung,
            Bildung und sozialer und digitaler Teilhabe. Daher arbeite ich seit
            mehreren Jahren in der digitalen Bildungsbranche.
          </p>
          <p>
            Als Gründungsmitglied und Vorstand des gemeinnützigen Vereins
            SuperDigital e.V. verfolge ich das Ziel die digitalen Fähigkeiten in
            unserer Gesellschaft zu fördern und damit die Teilhabe im digitalen
            als auch analogen Raum erhöhen. Vor allem von Menschen, welche im
            digitalen Raum bisher noch unterrespäsentiert sind. Eine kritische
            Auseinandersetzung über Digitalisierung und Gesellschaftsprozessen
            liegt mir sehr am Herzen.
          </p>
        </article>
        <img className="vorstand-img" src="/images/people.png" alt="" />
        <div className="ueberunsitem-footer">
          <a href="#">IMPRESSUM</a>
          <a href="#">DSGVO</a>
          <a href="#">SATZUNG</a>
        </div>
        <div className="footer-socials">
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
          <button className="kontakt">Kontakt</button>
        </div>
      </section>
    );
  }
}

export default UeberUnsItem;
