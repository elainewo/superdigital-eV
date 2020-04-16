import React, { Component } from "react";
import { contact } from "./Data";
class DetailBeitrag extends Component {
  state = { index: 0 };

  componentDidMount() {
    this.setState({ index: this.props.match.params.id });
  }

  render() {
    console.log(this.props.match.params.id);
    return <div>{contact[this.state.index].beschreibung}</div>;
  }
}

export default DetailBeitrag;
