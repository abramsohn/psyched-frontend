import React from 'react'
import baseUrl from '../../helpers/baseUrl.js'
// import { withRouter } from 'react-router-dom'

function Signout() {

    function handleClick() {
        // event.preventDefault()
        fetch(`${baseUrl}/users/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(
                console.log('signed out')
                // this.props.setUser({ name: null, role: null },
                // this.props.history.push('/')
                )
        // .then(createdUser => console.log(createdUser))
        // .catch(error => console.log({ 'Error': error }));
    }


    return (
        <button onClick={handleClick}>Signout</button>
        )
}

// export default withRouter(Signout)
export default Signout