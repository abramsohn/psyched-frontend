import React from 'react'

function Love(props) {
    if (props.emotion !== 'Love') {
        return null
    }
    return (
        <>
            <p>Do the <strong> opposite </strong> of your loveing action urges.</p>
            <ol>
                <li>Avoid the person, animal, or object you love.</li>
                <li>Distract youself from thoughts of the person, animal, or object</li>
                <li>Remind youself of why love is not justified when loving thoughts do arise</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Love;