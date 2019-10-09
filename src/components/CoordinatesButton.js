// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {



    clickHandler = (event) => {
        const x = event.clientX
        const y = event.clientY
        this.props.onReceiveCoordinates([x, y])
    }

    render(){
        return (<button onClick={this.clickHandler}>Coordinates Button</button>)
    }
}