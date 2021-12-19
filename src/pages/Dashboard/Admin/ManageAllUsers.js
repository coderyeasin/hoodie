import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import useAuth from '../../../Hooks/useAuth';


const ManageAllUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        const url = 'https://warm-falls-65459.herokuapp.com/allusers/'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filter = data.filter(e => e.email && e.displayName)
                setAllUsers(filter)

            })
    }, [user?.email])
    
    return (
        <div className=''>
        <h3>All orders {allUsers.length}</h3>
        {allUsers?.map(user => <Table responsive striped bordered hover variant="dark" key={user?._id}>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>

            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{user?.displayName}</td>
            <td>{user?.email}</td>
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

export default ManageAllUsers;