import React from 'react'

function SelfSooth(props) {
        if (props.currentStep !== 'SelfSooth') {
        return null
    }
    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3H9NL_iN4F0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default SelfSooth;