import React from 'react'

function TIPP(props) {
        if (props.currentStep !== 'TIPP') {
        return null
    }
    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZVHtjDgc_XU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default TIPP;