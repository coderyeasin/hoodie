import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';


const CheckoutForm = ({ hoodie }) => {
    const { price, email} = hoodie;
    const {name} = useAuth()
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
        setProcessing(true)
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

        //payment intent
        const { paymentIntent, error: intentError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: name,
                email: email,
            },
            },
          });
        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        } else {
            setError('')
            setSuccess('Your payment process is successfully')
            console.log(paymentIntent)
            setProcessing(false)
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
        {processing ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <button
            style={{
              width: "80px",
              border: "0",
              padding: "5px 0px",
              borderRadius: "10px",
              fontSize: "18px",
            }}
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        )}
      </form>

      {error && <p style={{ color: "red", margin: "10px 0px" }}>{error} </p>}

      {success && (
        <p style={{ color: "green", margin: "10px 0px" }}>{success} </p>
      )}
    </div>
  );
};

export default CheckoutForm;