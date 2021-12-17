import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {

    const [booked, setBooked] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(e => e.serviceName)
                setBooked(filter)
            })
    }, [])
    
    return (
        <div className=''>
            <h3>MyOrder {booked.length}</h3>
            {booked?.map(hoodie => <Table responsive striped bordered hover variant="dark" key={hoodie?._id}>
            <thead>
                <tr>
                <th>Hoodie Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Status</th>
 
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{hoodie?.serviceName}</td>
                <td>{hoodie?.email}</td>
                <td>{hoodie?.phone}</td>
                <td>{hoodie?.address}</td>
                <td>{hoodie?.status}</td>
                 <td>  
                </td>
                </tr>
            </tbody>
</Table>)}
        </div>
    );
};

export default MyOrder;