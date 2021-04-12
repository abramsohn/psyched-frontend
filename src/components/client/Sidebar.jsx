import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom'
import Signout from './Signout.jsx'
import baseUrl from '../../helpers/baseUrl.js' 


function Sidebar() {
    const [avatar, setAvater] = useState('')
    
    useEffect(() => {
        
        fetch(`${baseUrl}/users`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(response => {
            if (response.avatarImage) {
                setAvater(response.avatarImage);
            } else {
                setAvater(null);
            }
        });
    }, []);


     async function uploadFile (e){
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'psyched')
        await fetch('https://api.cloudinary.com/v1_1/dxarjpdwm/image/upload', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(res => fetch(`${baseUrl}/users/image`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                image: res.secure_url
            }),
            headers: { 'Content-Type': 'application/json' },
            })
            
            .then(res => res.json())
            .then(res => setAvater(res.image))
        )    
    }

    return (
        <>
            <header id="user">
                <picture id="user-image">
                    {avatar && <source srcSet={avatar} />}
                        <img src={`${process.env.PUBLIC_URL}/avatar_placeholder.png`}  alt="User avatar" />
                </picture>
                    
                <div className="user-info">
                     <input
                    type="file"
                    id="fileUpload"
                    name="file"
                    placeholder="upload an avatar image"
                    onChange={uploadFile}
                />
                <label htmlFor="fileUpload">Change Image</label>
                    | < Signout />
                </div>
               
            
            </header>
                <nav id="sidebar-navigation">
                    <ul>
                        <li>
                            <Link to='/client'>Dashboard</Link>
                        </li>
                            <Link to='/client/skills'>Skills Coaching</Link>
                            <Link to='/client/skills-helper'>+</Link>
                        <li>
                            Diary Card
                        </li>
                        <li>
                            Mindfulness
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