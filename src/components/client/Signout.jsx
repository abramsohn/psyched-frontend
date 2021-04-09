import React from 'react'
import { useAuth } from '../../useAuth.js';
// import { withRouter } from 'react-router-dom'

function Signout() {
    const auth = useAuth();

    return (
        <button className="signout" onClick={auth.signout}>Signout</button>
        )
}

// export default withRouter(Signout)
export default Signout