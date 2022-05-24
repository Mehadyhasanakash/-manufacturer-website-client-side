import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(() =>{
        // console.log('this is my user', user)
        const email = user?.user?.email;
        const currentUser = {email: email}
        if(user){
            fetch(`http://localhost:5000/user/${email}`,{
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data-inside is token', data)
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);


                setToken(accessToken)
            })
        }

    } ,[user])

    return [token , setToken]
}

export default useToken