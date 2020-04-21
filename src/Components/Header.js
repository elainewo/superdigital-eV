import React, { Component } from "react";
import Nav from "./Nav";
import HeaderItem from "./HeaderItem";
import "./header.css";
import "./digitalzukunft.css";
import DrawerToggleButton from "./DrawerToggleButton";

// const Header = (props) => {
//   return (
// <div id="home-header">
//   <div className="header">
//     <Nav />
//     <div className="toggle_button">
//       <DrawerToggleButton click={props.drawerClickHandler} />
//     </div>
//     <article className="head-titel">
//       <HeaderItem
//         headline1="Wieviel "
//         headline2="Mensch"
//         headline3="Digital"
//         thin="braucht "
//         second1="Digital?"
//         second2="Mensch?"
//       />
//     </article>
//   </div>
//   <div class="c-scrolldown">
//     <div class="c-line"></div>
//   </div>
// </div>
//   );
// };

// export default Header;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Header extends Component {
  state = { name: "", email: "", message: "" };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div id="home-header">
        <div className="header">
          <Nav
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={this.state.name}
            email={this.state.email}
            message={this.state.message}
          />
          <div className="toggle_button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <article className="head-titel">
            <HeaderItem
              headline1="Wieviel "
              headline2="Mensch"
              headline3="Digital"
              thin="braucht "
              second1="Digital?"
              second2="Mensch?"
            />
          </article>
        </div>
        <div className="c-scrolldown">
          <div className="c-line"></div>
        </div>
      </div>
    );
  }
}

export default Header;
