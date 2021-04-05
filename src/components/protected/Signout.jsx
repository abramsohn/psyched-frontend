import React, { Component } from 'react'
import baseUrl from '../../helpers/baseUrl.js'
import { withRouter } from 'react-router-dom'

class Signout extends Component{

    handleClick = () => {
        // event.preventDefault()
        fetch(`${baseUrl}/users/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(
                this.props.setUser({ name: null, role: null },
                this.props.history.push('/')
                ))
        // .then(createdUser => console.log(createdUser))
        // .catch(error => console.log({ 'Error': error }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>Signout</button>
            )
        
    }
}

export default withRouter(Signout)