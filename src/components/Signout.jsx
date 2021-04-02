import React, { Component } from 'react'
import baseUrl from '../helpers/baseUrl.js'

class Signout extends Component{

    handleClick = () => {
        // event.preventDefault()
        fetch(`${baseUrl}/users/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })
        // .then(res => res.json())
        // .then(createdUser => console.log(createdUser))
        // .catch(error => console.log({ 'Error': error }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>Signout</button>
            )
        
    }
}

export default Signout