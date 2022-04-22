import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';


const CheckoutForm = ({ hoodie }) => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        //if not loaded yet
        if (!stripe || !elements) {
            return;
        }
        //if card blank
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
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