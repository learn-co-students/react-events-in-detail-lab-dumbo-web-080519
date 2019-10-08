// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    clickHandler = evt=>{
        evt.persist()
        setTimeout(() => {
            this.props.onDelayedClick(evt)
        }, this.props.delay);
    }
    render(){

        return <button onClick = {this.clickHandler} >Delay</button>
    }
}