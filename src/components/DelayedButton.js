// Code DelayedButton Component Here
import React from 'react'

const DelayedButton = ({onDelayedClick, delay}) => {
    return (
        <button 
            onClick={(event) => {
                event.persist()
                setTimeout(() => {
                    onDelayedClick(event);
                  }, delay)
            }}
        />
    )
}

export default DelayedButton