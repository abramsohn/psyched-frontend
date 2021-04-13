import React from 'react'
import { useAuth } from '../../useAuth.js'

const Dashboard = () => {
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
            <h1><span className="greeting">{generateGreeting()} {auth.user} </span></h1>
        </>
    )
}


export default Dashboard;