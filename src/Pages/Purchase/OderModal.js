import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Components/useFirebaseHook/useFirebaseHook';

const OderModal = ({orders, setOders}) => {
    
    const {_id,name,price,availableQuantity,oderquantity} = orders
    const [user] = useAuthState(auth);


    


    const heandalSubmit = event =>{
        event.preventDefault()
        const orders = {

            orderId: _id,
             oder : name,
             user: user.email,
             availableQuantity:availableQuantity,
             price:price,
             oderquantity:oderquantity,

             userName: user.displayName,
             phone: event.target.phone.value  
          
           }

           fetch('http://localhost:5000/order', {
               method:"POST",
               headers:{
                  'content-type':'application/json'
               },
               body:JSON.stringify(orders)
    
           })
           .then(res => res.json())
           .then(data => {
                // <tost
            setOders(null)


           })
    }




    return (
        <div>
            <input type="checkbox" id="my-oder-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="my-oder-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold  text-center text-3xl mb-8">Name:{name}</h3>
    <h3 className='font-bold  text-center text-3xl mb-8'>price {price}</h3>
    <h3 className='font-bold  text-center text-3xl mb-8'>    availableQuantity {availableQuantity}  </h3>
    <h3 className='font-bold  text-center text-3xl mb-8'> <button>+</button> oderquantity {oderquantity}<button>-</button></h3>


    <form onSubmit={heandalSubmit}  className='grid grid-cols-1 gap-4 justify-items-center'>



    <input type="text" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
    <input type="text" name='userName' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="phone Number" class="input input-bordered w-full max-w-xs" />


    <input type="submit" value="submit" class="btn btn-primary w-full max-w-xs" />






    </form>
    
  </div>
</div>
            
        </div>
    );
};

export default OderModal;