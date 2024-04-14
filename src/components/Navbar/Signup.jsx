import React, { useEffect, useState } from 'react'
import "./navbar.css"
import axios from 'axios';

function Signup() {

  const [message, setMessage] = useState('');

  useEffect ( ()=>
  {
  axios.get('http://127.0.0.1:8000/shop/api/gethello/')

   .then(response => {
    console.log(response.data.message,"SSSSSSSSSSSSSSSSSSSSS")
    setMessage(response.data.message); 
    console.log(setMessage,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
   
   })
   .catch(error =>{
    console.log(error)
   })
  })

    return (
      <h1>
        {message}
      </h1>
    )
}

export default Signup