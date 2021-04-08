import React from 'react'

function Anger(props) {
    if (props.emotion !== 'Anger') {
        return null
    }
    return (
        <>
            <p>Do the <strong>opposite</strong> of your Angery action urges.</p>
            <ol>
                <li><strong>Gentley avoid</strong> the person you are angry with.</li>
                <li>Take a time out, and breathe in and out deeply and slowly</li>
                <li><strong>Be kind</strong> rather than mean and insulting</li>
                <li>Practice opposite all the way</li>
            </ol>
        </>
    )
}

export default Anger;