import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const PayOrder = () => {
    const { id } = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`).then(res => res.json()).then(data => setOrder(data))
    },[order])

    return (
      <div>
            <h3>Payment Order : Stripe Implement {id}</h3>
            <h4>Pay this: ${order?.price}</h4>
       
      </div>
    );
};

export default PayOrder;