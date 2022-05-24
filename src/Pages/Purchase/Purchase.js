import React, { useEffect, useState } from 'react';
import OderModal from './OderModal';
import PurchaseCard from './PurchaseCard';

const Purchase = () => {

    const [services, setService] = useState([]);

    const [orders, setOders] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))
    } ,[])


    return (
        <div className='mt-20'>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:p-10'>
            {
                services.map(service => <PurchaseCard
                key={service._id}
                service={service}
                setOders={setOders}
                
                
                
                >

                    


                </PurchaseCard>)
            }


        </div>
        <div>
            {orders && <OderModal orders={orders} setOders={setOders}></OderModal>}
        </div>
            
        </div>
    );
};

export default Purchase;