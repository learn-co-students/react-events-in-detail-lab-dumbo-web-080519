// Code DelayedButton Component Here
import React from 'react'

const DelayedButton = ({onDelayedClick, delay}) => {
    return (
        <button 
            onClick={(event) => {
                setTimeout(delay, onDelayedClick(event))
            }}
        />
    )
}

export default DelayedButton