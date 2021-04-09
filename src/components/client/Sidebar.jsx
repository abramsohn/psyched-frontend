import React from 'react'
import { Link } from 'react-router-dom'
import Signout from './Signout.jsx'
function Sidebar() {
   
    return (
        <>
            <header id="user">
                <div id="user-image">
                    <img src="https://www.fillmurray.com/300/300" alt="avatar"/>
                </div>
                <div className="user-info">
                    Edit Profile | < Signout />
                </div>
            </header>
                <nav id="sidebar-navigation">
                    <ul>
                        <li>
                            <Link to='/client'>Dashboard</Link>
                        </li>
                            <Link to='/client/skills'>Skills</Link>
                        <li>
                            Diary Card
                        </li>
                        <li>
                            Mindfullness
                        </li>
                        <li>
                            More Stuff
                        </li>
                    </ul>
                </nav>
            </>
    )
}

export default Sidebar