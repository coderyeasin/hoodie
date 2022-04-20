import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const PayOrder = () => {
    const { id } = useParams()
    
// useEffect(() => {
//   const url = `https://warm-falls-65459.herokuapp.com/orders?email=${user?.email}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const filter = data.filter((e) => e.serviceName);
//       setBooked(filter);
//     });
// }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <div>
            <h3>Payment Order : Stripe Implement {id}</h3>
            
       
      </div>
    );
};

export default PayOrder;