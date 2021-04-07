import React from 'react'
import Sidebar from './Sidebar.jsx'
import MainForm from './MainForm.jsx'

function Layout() {
    return (
        <>  
            <div className="row">
                <div className="three columns">
                    <Sidebar />
                </div>
                <div className="nine columns">
                    <MainForm />
                </div>
            </div>
        </>
    )
 
}

export default Layout