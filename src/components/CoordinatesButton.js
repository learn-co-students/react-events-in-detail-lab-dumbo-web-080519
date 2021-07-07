import React, { Component } from 'react'

export default class CoordinatesButton extends Component{
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientY, event.clientX])

    }
    render(){
       return  (<div>
            <button onClick={this.handleClick}></button>
        </div>)
    }



}