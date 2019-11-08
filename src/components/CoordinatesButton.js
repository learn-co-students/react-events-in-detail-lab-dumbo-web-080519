// Code CoordinatesButton Component Here
import React from 'react'

const CoordinatesButton = (props) => {
    return (
        <button 
            onClick={(event) => {
                const x = event.clientX
                const y = event.clientY
                props.onReceiveCoordinates([x, y])
            }}
        />
    )
}

export default CoordinatesButton