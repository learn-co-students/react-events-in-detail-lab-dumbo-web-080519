import React from 'react'

export default class DelayedButton extends React.Component {
    
    handleClick = event => {
      event.persist();
      const timeout = () => {this.props.onDelayedClick(event)}
      
      setTimeout(timeout, this.props.delay); //setTimeout takes ina reference to a function and an int
    };
  
    render() {
      return <button onClick={this.handleClick}>Delayed</button>;
    }
  }