import React from 'react'

function IMPROVE(props) {
        if (props.currentStep !== 'distract') {
        return null
    }
    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bl1Sy7xR92g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default IMPROVE;