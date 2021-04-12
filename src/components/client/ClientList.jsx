import React, {
    useState,
    useEffect
} from 'react'
import baseUrl from '../../helpers/baseUrl.js'
function ClientList() {
    const [clientList, setClientList] = useState([])
    
    useEffect(() => {
        console.log('getting client')
        fetch(`${baseUrl}/users/clients`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            
        })
        .then(res => res.json())
            .then(response => {
                console.log(response)
                setClientList( response.clients );
        });
    }, [])

    return (
        <>
        <h1>Your Client List</h1>
        <div className="clientList">
            {clientList.map(client => {
                return (
                    <div key={client.id} className="client">
                    <header>
                        <picture className="client-image">
                            {client.avatarImage && <source srcSet={client.avatarImage} />}
                            <img src={`${process.env.PUBLIC_URL}/avatar_placeholder.png`}  alt="Client Avatar" />
                        </picture>
                    </header>
                    <div className="client-info">
                            <h3>{client.name}</h3>
                            <p>Email: {client.email}</p>
                    </div>
                </div>
                )
            })}
            </div>
            </>
    )
}

export default ClientList