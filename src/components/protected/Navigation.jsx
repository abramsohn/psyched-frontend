import React,{ Component } from 'react'
import Signout from './Signout.jsx'

class Navigation extends Component {

    render() {
        return(
                <Signout setUser={this.props.setUser} />
            )
    }
}

export default Navigation