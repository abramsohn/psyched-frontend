
import React, {
    useState,
    useEffect
} from 'react'
import baseUrl from '../../helpers/baseUrl'
import { useAuth } from '../../useAuth.js';

function SelectTherapist() {
    const auth = useAuth();

    const [therapists, setTherapists] = useState([])
    const [therapist, setTherapist] = useState('')

    useEffect(() => {
            fetch(`${baseUrl}/users/therapists`, {
                method: 'GET',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
                .then(response =>  setTherapists(response.therapists));
                
        }, []);

    function handleSubmit(e) {
        e.preventDefault()
        if(therapist){
            fetch(`${baseUrl}/users`, {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    therapist: therapist
                }),
                headers: { 'Content-Type': 'application/json' },
                })
                
                .then(res => res.json())
                // .then(res => console.log(res))       
            }
        }
    
    return (
        <>
            <form onSubmit={handleSubmit} id="main-form">
                <div className="main-form-container">
                <div className="form-group">
                    <label htmlFor="emotion">Select your therapist:</label>
                    <div className="input-group">
                        <select
                            onChange={e => setTherapist(e.target.value)}
                            onBlur={e => setTherapist(e.target.value)}
                        >
                            <option value="" defaultValue>Choose a therapist</option>
                            {therapists.map((item, index) => {
                                return (
                                     <option
                                            key={index}
                                            value={item.id}
                                            selected={item.id === auth.therapist}
                                    >
                                        {item.name}
                                        </option>
                                )
                            })}
                        </select>
                    </div>
                        <input type="submit" value="Change" />
                        </div>
                </div>
            </form>
        </>
    )
    
}

export default SelectTherapist