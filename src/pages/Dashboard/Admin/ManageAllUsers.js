import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import useAuth from '../../../Hooks/useAuth';


const ManageAllUsers = () => {

    const [allUsers, setAllUsers] = useState([])

    const {user, isLoading} = useAuth()

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


//DELETE
    const handleRemove = id => {
        const process = window.confirm('Are you sure?')
        if (process) {
            fetch(`https://warm-falls-65459.herokuapp.com/users/${id}`, {
                method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('deleted successfully')
                            const restData = data.filter(e => e._id !== id)
                            setAllUsers(restData)
                        }
                })
        }
}
    
    return (
        <div className=''>

{/* {isLoading && <div>
                <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>} */}

        <h3>All Users {allUsers.length}</h3>
            {allUsers?.map(user =>
                <Table responsive striped bordered hover variant="dark" key={user?._id}>
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
                    <Button onClick={()=>handleRemove(user?._id)} className='text-danger bg-light'>X</Button>
            </td>
            </tr>
        </tbody>
                </Table>)}
            
    </div>
    );
};

export default ManageAllUsers;