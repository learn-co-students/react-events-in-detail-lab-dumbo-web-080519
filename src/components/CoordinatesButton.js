import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  render() {
    return <button onClick={evt => {this.props.onReceiveCoordinates([evt.clientX, evt.clientY])}}></button>
  }

}
