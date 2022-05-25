import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Alluser = () => {

    const {data:users, isLoading, refetch}= useQuery('user',  () => fetch('http://localhost:5000/user').then(res => res.json()))


    if(isLoading){
        return <button class="btn loading">loading</button>
    }
    return (
        <div>
            <h1>user:{users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
          users.map(user => <UserRow
          
          
          key={users._id}
          user={user}
          refetch={refetch}
          
          >




          </UserRow>)
      }
      {/* <!-- row 2 --> */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Alluser;