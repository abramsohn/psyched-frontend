import React from 'react'

function Shame(props) {
      if (props.emotion !== 'Shame') {
        return null
    }
    return (
        <>
            <p>Do the <strong> opposite </strong> of your action urges.</p>
            <ol>
                <li>Make public your personal chracteristics or your behavior</li>
                <li>repeat the behavior that sets off shame over and over (without hideing the behavior from those who won&apos;t reject you)</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Shame;