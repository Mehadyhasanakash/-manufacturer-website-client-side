import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`;

    const { data:booking, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method:"GET",
        headers: {
            'authorization':`bearer ${localStorage.getItem('accessToken')}`
        }



    }).then(res =>  res.json()))




    if (isLoading) {
        return <button class="btn loading">loading</button>
        
    }




    return (


            <div>
                <div class="card w-96 bg-base-100 shadow-xl my-12">
                    <div class="card-body">
                        <h2 class="card-title">{booking.price}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>



                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">



                    </div>
                </div>
            </div>
            
    );
};

export default Payment;