import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')

    const {price} = booking;




    const [clientSecret, setClientSecret] = useState('')

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent', {
            method:"POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(price)
        })
        .then(res => res.json())
        .then(data => {
                if(data?.clientSecret){
                    setClientSecret(data.clientSecret)
                }
        })
        

    } ,[price])



    const handleSubmit = async (event) =>{
        event.preventDefault()


        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.

            return
        }
            const card = elements.getElement(CardElement);

            if (card == null) {
                return;
              }
              const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card,
              });
              if (error) {
                console.log( error);
                setCardError(error.message)
              } 
              else {
                setCardError('');
              }
    
}

   



    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-primary'>{cardError}</p>
    }
        </div>
    );
};

export default CheckoutForm;