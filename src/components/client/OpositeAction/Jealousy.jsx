import React from 'react'

function Jealousy(props) {
    if (props.emotion !== 'Jealousy') {
        return null
    }
    return (
        <>
            <p>Do the <strong> opposite </strong> of your Jealous action urges.</p>
            <ol>
                <li>Let go of controlling others&apos; actions.</li>
                <li>Share the things and people you have in your life</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Jealousy;