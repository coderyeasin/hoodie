import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageAllHoodies = () => {

    const [hoodies, setHoodies] = useState([])

    useEffect(() => {
        const url = `https://warm-falls-65459.herokuapp.com/hoodies`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(e => e.title && e.image && e.description)
                setHoodies(filter)
            })
    }, [])

    return (
        <div className=''>
        <h3>All Brand Hoodies {hoodies.length} </h3>
        {hoodies?.map(hoodie => <Table responsive striped bordered hover variant="dark" key={hoodie?._id}>
        <thead>
            <tr>
            <th>Title</th>
            <th>Facilities</th>
            <th>Location</th>
            <th>Image Link</th>
            <th>Dynamic Image</th>
            <th>Size</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>

            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{hoodie?.title}</td>
            <td>{hoodie?.facilities}</td>
            <td>{hoodie?.location}</td>
            <td>{hoodie?.image.slice(0, 10)}...</td>
            <td>{hoodie?.image.slice(0, 10)}...</td>
            <td>{hoodie?.type}</td>
            <td>{hoodie?.price}</td>
            <td>{hoodie?.description.slice(0, 20)}...</td>
                    <td>
                        <Button className='text-success bg-light'>Edit</Button>
                        <Button className='text-danger bg-light'>X</Button>
                    </td>
             <td>  
            </td>
            </tr>
        </tbody>
    </Table>)}
    </div>
    );
};

export default ManageAllHoodies;