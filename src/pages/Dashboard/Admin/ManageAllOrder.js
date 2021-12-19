import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import useAuth from '../../../Hooks/useAuth';


const ManageAllOrder = () => {
    const [booked, setBooked] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        const url = 'https://warm-falls-65459.herokuapp.com/allorders/'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filter = data.filter(e => e.serviceName && e.phone)
                setBooked(filter)

            })
    }, [user?.email])
    
    return (
        <div className=''>
        <h3>All orders {booked.length}</h3>
        {booked?.map(hoodie => <Table responsive striped bordered hover variant="dark" key={hoodie?._id}>
        <thead>
            <tr>
            <th>Hoodie Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>

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
                    <Button className='text-success bg-light'>Edit</Button>
                    <Button className='text-danger bg-light'>X</Button>
            </td>
            </tr>
        </tbody>
</Table>)}
    </div>
    );
};

export default ManageAllOrder;