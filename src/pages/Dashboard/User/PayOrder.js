import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const PayOrder = () => {
    const { id } = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
      fetch(`http://localhost:5000/orders/${id}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }, [id]);

    return (
      <div>
        <h3>
          Hi {order?.name}, Please pay for Best hoodie : {order?.serviceName}
        </h3>
        <h4>Price: ${order?.price}</h4>
        <Elements stripe={stripePromise}>
          <CheckoutForm hoodie={order} />
        </Elements>
      </div>
    );
};

export default PayOrder;