import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Components/useFirebaseHook/useFirebaseHook';

const Myoder = () => {

    const [oders, setOders] = useState([]);
    const [user] = useAuthState(auth)
    
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/order?user=${user.email}`,{
            method:"GET",
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOders(data))
       }
    } ,[user])

    return (
        <div>
            <h1>My oder:{oders.length}</h1>

            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Machine Name</th>
        <th>oderquantity</th>
        <th>availableQuantity</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}

      {
          oders.map((oder, index) => <tr>
            <th>{index+1}</th>
            <td>{oder.userName}</td>
            <td>{oder.oder}</td>
            <td>{oder.oderquantity}</td>
            <td>{oder.availableQuantity}</td>
            <td>
              {(oder.price && !oder.paid) && <Link to={`/dashboard/payment/${oder._id}`}> <button className='btn btn-primary btn-xs'> pay </button> </Link>}
              {(oder.price && oder.paid) &&  <span className=' text-warning '> pad </span>}
            
            
            </td>
          </tr> )
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myoder;