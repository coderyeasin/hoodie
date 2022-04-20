import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {

    const [booked, setBooked] = useState([])
    const {user, token} = useAuth()

    useEffect(() => {
        const url = `https://warm-falls-65459.herokuapp.com/orders?email=${user?.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(e => e.serviceName)
                setBooked(filter)
            })
    }, [])
    
    return (
      <div className="">
        <h3>MyOrder {booked.length}</h3>
        {booked?.map((hoodie) => (
          <Table
            responsive
            striped
            bordered
            hover
            variant="dark"
            key={hoodie?._id}
          >
            <thead>
              <tr>
                <th>Hoodie Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Status</th>
                <th>Payment</th>
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
                  <Button className="text-success bg-light">Edit</Button>
                  <Button className="text-danger bg-light">X</Button>
                </td>
                <td>
                  <Link to={`/dashboard/payment/${hoodie._id}`}>
                                <Button className="text-success bg-light">Pay - ${hoodie?.price}</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    );
};

export default MyOrder;