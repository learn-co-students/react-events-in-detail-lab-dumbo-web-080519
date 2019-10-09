// Code CoordinatesButton Component Here
import React from 'react'
class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    let array = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
  }
  render(){

    return <button onClick={this.handleClick}>Coordinates</button>
  }
}
export default CoordinatesButton
