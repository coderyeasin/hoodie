import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';


const CheckoutForm = ({ hoodie }) => {
    const stripe = useStripe()
    const element = useElements()
    
    const handleSubmit = e => {
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;