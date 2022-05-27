import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3LuxEztCWt8D5d0iNT9GjSp0KpqNMfiY7xNd2xFLqyK4wcMEpR8wGe1BgdgzAikEA6xc2JkrgZg1YV0MwhPX5Y009b3jHgk4');


const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`;

    const { data: booking, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }



    }).then(res => res.json()))




    if (isLoading) {
        return <button class="btn loading">loading</button>

    }




    return (


        <div>
            <div class="card w-96 bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Machine Name: {booking.oder}</h2>
                    <h2 class="card-title">Machine price: {booking.price}</h2>
                    <h2 className='card-title'>availableQuantity:{booking.availableQuantity}</h2>

                </div>
            </div>



            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;