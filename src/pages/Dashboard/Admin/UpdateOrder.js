import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateOrder = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://warm-falls-65459.herokuapp.com/orders/${id}`)
            .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    const handleStatus = e => {
        const status = e.target.value
        const updateStatus = { status: status }
        setUser(updateStatus)
    }

    
    const handleUpdate = (e) => {
        fetch(`https://warm-falls-65459.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                    setUser({})
                    navigate('/dashboard/allOrders')
                }
            })
        
        e.preventDefault()
    }
    
    return (
        <div>
            <h3>ID: {id}</h3>
            <form onSubmit={handleUpdate}>
                <input className='text-dark' type="text" onChange={handleStatus} value={user?.status || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;