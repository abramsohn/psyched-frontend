import React from 'react'

function IMPROVE(props) {
        if (props.currentStep !== 'IMPROVE') {
        return null
    }
    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ao2RnkGKlo8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default IMPROVE;