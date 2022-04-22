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
        //take price from user
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type:'card',
            card,
        })
        if (error) {
            console.log(error)
        }
        else {
            console.log(paymentMethod)
        }
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="w-50 mx-auto my-5"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#ffffff",
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