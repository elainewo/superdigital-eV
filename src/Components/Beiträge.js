import React, { Component } from "react";
import BeiträgeItems from "./BeiträgeItems";
import "./beiträge.css";
import { contact } from "./Data";
import { contact2 } from "./Data2";
import { contact3 } from "./Data3";

class Beiträge extends Component {
  state = {
    contact: contact,
    contact2: contact2,
    contact3: contact3,
    isExpanded: true,
    isSecondExpanded: false,
    isThirdExpanded: false,
  };

  handleExpand = () => {
    this.setState({
      isExpanded: true,
      isSecondExpanded: false,
      isThirdExpanded: false,
    });
  };
  handleExpand2 = () => {
    this.setState({
      isExpanded: false,
      isSecondExpanded: true,
      isThirdExpanded: false,
    });
  };
  handleExpand3 = () => {
    this.setState({
      isExpanded: false,
      isSecondExpanded: false,
      isThirdExpanded: true,
    });
  };

  render() {
    return (
      <div className="veranstaltung">
        <section className="buttons">
          <button
            style={
              this.state.isExpanded
                ? { boxShadow: `3px 8px 0px 0px #ffda00` }
                : { boxShadow: `0px 0px 0px 0px` }
            }
            onClick={this.handleExpand}
            className="cool-button"
          >
            aktuelle Veranstaltungen
          </button>
          <button
            style={
              this.state.isSecondExpanded
                ? { boxShadow: `3px 8px 0px 0px #ffda00` }
                : { boxShadow: `0px 0px 0px 0px` }
            }
            onClick={this.handleExpand2}
            className="cool-button"
          >
            aktuelle Beiträge
          </button>
          <button
            style={
              this.state.isThirdExpanded
                ? { boxShadow: `3px 8px 0px 0px #ffda00` }
                : { boxShadow: `0px 0px 0px 0px` }
            }
            onClick={this.handleExpand3}
            className="cool-button"
          >
            Das Netz in Zahlen
          </button>
        </section>
        <section
          style={
            this.state.isExpanded ? { display: "grid" } : { display: "none" }
          }
          className="item"
        >
          {this.state.contact.map((item, i) => (
            <BeiträgeItems
              titel={item.titel}
              datum={item.datum}
              key={i}
              id={item.id}
              beschreibung={item.beschreibung}
            />
          ))}
        </section>
        <section
          className="item"
          style={
            this.state.isSecondExpanded
              ? { display: "grid" }
              : { display: "none" }
          }
        >
          {this.state.contact2.map((item, i) => (
            <BeiträgeItems
              titel={item.titel2}
              datum={item.datum2}
              key={i}
              beschreibung={item.beschreibung2}
            />
          ))}
        </section>
        <section
          className="item"
          style={
            this.state.isThirdExpanded
              ? { display: "grid" }
              : { display: "none" }
          }
        >
          {this.state.contact3.map((item, i) => (
            <BeiträgeItems
              titel={item.titel3}
              datum={item.datum3}
              key={i}
              beschreibung={item.beschreibung3}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Beiträge;
