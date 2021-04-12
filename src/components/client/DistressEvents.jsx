import React, { useState, useEffect } from 'react'
import baseUrl from '../../helpers/baseUrl' 


function DistressEvents() {
    const [distressEvents, setDistressEvents] = useState([])
    
    useEffect(() => {
        fetch(`${baseUrl}/distress-events`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            
        })
        .then(res => res.json())
        .then(response => {
            setDistressEvents( response.distressEvents );
        });
    }, [])

    function formatDate(string) {
        const date = new Date(string);   
        return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    }

    function formatTime(string) {
        const date = new Date(string);   
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return(
        <div className="distressEvents">
            {distressEvents.length > 0 ? 
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {distressEvents.map((event, index) => {
                        return (
                            <tr key={index}>
                                <td>{formatDate(event.createdAt)}</td>
                                <td> {formatTime(event.createdAt)}</td>
                                <td>
                                    You used skill coaching for {event.emotionIntensity > 70 ? `high levels of ${event.emotion}. ` : `${event.emotion}. `}
                                    {event.skill ? `you used ${ event.skill } in order to regulate your emotions` : ''}
                                    {event.factCheck == 'no' && 'You checked the facts and decided that they dont match your reaction and decided to do opposite action'}
                                    {event.factCheck == 'yes' &&'You checked the facts and decided that they did match your reaction and decided to do problem solving'}
                                </td>
                        
                            </tr>
                            )
                        })}
                </tbody>
                </table>
                 : <h3>You didn&apos;t use skills coaching yet</h3>}
        </div>
    )
}

export default DistressEvents