import React from 'react';
import { useForm } from "react-hook-form";


const PayOrder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <div>
            <h3>Payment Order : Stripe Implement</h3>
            
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <select {...register("money")}>
            <option value="yes">$sign</option>
            <option value="no">male</option>
            <option value="other">Test</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    );
};

export default PayOrder;