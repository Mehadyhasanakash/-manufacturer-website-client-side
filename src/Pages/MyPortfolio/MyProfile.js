import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Components/useFirebaseHook/useFirebaseHook';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl ">
  <div class="card-body">
    <h2 class="card-title">User Email: {user.email}</h2>
    <h2 class="card-title">User Email: {user.displayName}</h2>
    <div class="card-actions justify-end">
    <Link className='btn btn-primary' to="/MyPortfolio"> MyPortfolio </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;