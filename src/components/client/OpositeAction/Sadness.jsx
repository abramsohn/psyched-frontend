import React from 'react'

function Sadness(props) {
      if (props.emotion !== 'Sadness') {
        return null
    }
    
    return (
        <>
            <p>Do the <strong> opposite </strong> of your sad action (or inaction) urges.</p>
            <ol>
                <li>Get active, approach</li>
                <li><strong>Avoid avoiding</strong></li>
                <li>Build mastery: Do things that make you feel competent and self-confident.</li>
                <li>Increase plesent events</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Sadness;