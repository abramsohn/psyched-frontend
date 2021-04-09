import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import Signout from './Signout.jsx'

function Sidebar() {
    const [avatar, setAvater] = useState('')
    
     async function uploadFile (e){
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'psyched');
        await fetch('https://api.cloudinary.com/v1_1/dxarjpdwm/image/upload', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(file => setAvater(file.secure_url))
         
        await fetch(`http://localhost:3004/users/image`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                image: avatar
            }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(res => console.log(res))
    };

    return (
        <>
            <header id="user">
                <div id="user-image">
                    {avatar && <img src={avatar} alt="avatar" />}
                </div>
                <div className="user-info">
                    Edit Profile | < Signout />
                </div>
                <label htmlFor="file">Image</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="upload an avatar image"
                    onChange={uploadFile}
                />
            
            </header>
                <nav id="sidebar-navigation">
                    <ul>
                        <li>
                            <Link to='/client'>Dashboard</Link>
                        </li>
                            <Link to='/client/skills'>Skills</Link>
                            <Link to='/client/skills-helper'>+</Link>
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