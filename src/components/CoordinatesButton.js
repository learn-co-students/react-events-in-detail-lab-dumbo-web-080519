// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
    clickHandler = (evt)=>{
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
    }
    render(){

        return <button onClick = {this.clickHandler} >Coordiantes</button>
    }
}