import React from 'react';
import { useQuery } from 'react-query';

const Alluser = () => {

    const {data:users, isLoading}= useQuery('user',  () => fetch('http://localhost:5000/user').then(res => res.json()))


    if(isLoading){
        return <button class="btn loading">loading</button>
    }
    return (
        <div>
            <h1>user:{users.length}</h1>
        </div>
    );
};

export default Alluser;