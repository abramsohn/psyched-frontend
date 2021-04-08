import React from 'react'
import { useAuth } from '../../useAuth.js'
import { Link } from 'react-router-dom'
function Sidebar() {
    let auth = useAuth();
    
    function generateGreeting() {
        const currentTime = new Date().getHours()
        if (currentTime >= 6 && currentTime < 12) return 'Good Morning';
        else if (currentTime >= 12 && currentTime < 18) return 'Good Afternoon';
        else if (currentTime >= 18 && currentTime < 21) return 'Good Evening';
        else if (currentTime >= 21 || currentTime < 6) return 'Good Night';
        
    }
    return (
        <>
            <header id="user">
                <div id="user-image">
                    <img src="https://www.fillmurray.com/300/300" alt="avatar"/>
                </div>
                <div className="user-info">
                    <span className="greeting">{generateGreeting()}  {auth.user} </span>
                    Edit Profile
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