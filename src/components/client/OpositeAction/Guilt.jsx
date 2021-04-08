import React from 'react'

function Guilt(props) {
    if (props.emotion !== 'Guilt') {
        return null
    }
    return (
        <>
            <p>Do the <strong> opposite </strong> of your action urges.</p>
            <ol>
                <li>Make public your personal chracteristics or your behavior</li>
                <li>repeat the behavior that sets off Guilt over and over (without hideing the behavior from those who won&apos;t reject you)</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Guilt;