import React from 'react'

function Envy(props) {
    if (props.emotion !== 'Envy') {
        return null
    }
    return (
        <>
            <p>Do the <strong> opposite </strong> of your envious action urges.</p>
            <ol>
                <li>Inhibit destroying what the other person has</li>
                <li>Count your blessings. Make a list of thge things you are thenkful for.</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Envy;