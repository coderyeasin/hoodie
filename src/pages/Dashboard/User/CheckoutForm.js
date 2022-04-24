import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ hoodie }) => {
    const { price } = hoodie;
    const stripe = useStripe()
    const elements = useElements()

    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState("")
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      }).then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          console.log(data); // its keep a clientSecret so get them to use
        });
    }, [price]);

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
            setError(error.message)
        }
        else {
            setError('')
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
        <button style={{width:'80px', border:'0', padding:'5px 0px', borderRadius:'10px', fontSize:'18px'}} type="submit" disabled={!stripe}>
          Pay
        </button>
          </form>
          
          {error && 
              <p style={{color:'red', margin:'10px 0px'}}>{error} </p>
          }
    </div>
  );
};

export default CheckoutForm;