import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleDelayedClick = (event) => {
        // console.log(event)
       event.persist()
       setTimeout(() => {
           this.props.onDelayedClick(event)
       }, this.props.delay)
    }

    render(){
        return (<div>
            <button onClick={this.handleDelayedClick}></button>
        </div>)
    }
  




}