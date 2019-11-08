import React, { Component } from "react";

export default class DelayedButton extends Component {

  render() {
    return <button onClick={this.handleClick}>Delay</button>;
  }

  handleClick = event => {
  	event.persist()
    setTimeout(() => {this.props.onDelayedClick(event), this.props.delay});
  }
}
