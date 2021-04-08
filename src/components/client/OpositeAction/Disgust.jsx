import React from 'react'

function Disgust(props) {
     if (props.emotion !== 'Disgust') {
        return null
    }
    return (
        <>
            <p>Do the <strong> opposite </strong> of your disgusted action urges.</p>
            <ol>
                <li>Move close, Eat, drink, stand near, or embrace what you find disgusting.</li>
                <li>Be king to those you feel contempt for; step into the other person&apos;s shoes.</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Disgust;