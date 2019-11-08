import React, { Component } from "react";

export default class CoordinatesButton extends Component {

  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }

  handleClick = event => {
    let cArray = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(cArray);
  };
}
