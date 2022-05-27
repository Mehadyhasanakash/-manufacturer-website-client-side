import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Components/useFirebaseHook/useFirebaseHook';

const Review = () => {
    const [user] = useAuthState(auth)

    const heandalSubmit = event =>{
        event.preventDefault()
        const review = { 

            
             user: user.email,

             userName: user.displayName,
             ratings: event.target.rating.value  
          
           }

           fetch('http://localhost:5000/review', {
               method:"POST",
               headers:{
                  'content-type':'application/json',
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  
               },
               body:JSON.stringify(review)
    
           })
           .then(res => res.json())
           .then(data => {
                // <tost
            console.log(data)
            toast.success('success fully add')


           })
    }



    return (

       <div>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">

  <form onSubmit={heandalSubmit}  className='grid grid-cols-1 gap-4 justify-items-center'>



<input type="text" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
<input type="text" name='userName' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />

<div class="rating">
  <input  type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
</div>


<input type="submit" value="submit" class="btn btn-primary w-full max-w-xs" />






</form>






    
    </div>
  </div>
</div>


















           
       
    );
};

export default Review;