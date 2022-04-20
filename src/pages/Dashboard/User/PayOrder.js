import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const PayOrder = () => {
    const { id } = useParams()
    


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <div>
            <h3>Payment Order : Stripe Implement {id}</h3>
            
       
      </div>
    );
};

export default PayOrder;