import React from 'react'

function Fear(props) {
    if (props.emotion !== 'Fear') {
        return null
    }
    
    return (
        <>
            <p>Do the <strong> opposite </strong> of your fearfull action urges.</p>
            <ol>
                <li>Do what you are afraid of doing <strong>over and over</strong>.</li>
                <li>Approach events, places, tasks, activities and people you are afraid of.</li>
                <li>Do thing to give yourself a sense of control over your fears</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Fear;