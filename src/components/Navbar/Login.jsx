import React, { useState }  from 'react'
import axios from 'axios';


function Login() {
  const [username , setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUserNameChange= (event) =>{
    setUsername(event.target.value);
  }
  const handlesetPasswordChange= (event) =>{
    setPassword(event.target.value);
  }

  const handleSubmit= async (event) =>{
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/shop/api/users/', {
          username,
          password
      });
      console.log('Response from server:', response.data);
      // Optionally, reset the form fields after successful submission
      setUsername('');
      setPassword('');
  } catch (error) {
      console.error('Error submitting form:', error);
  }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>Username:</label>
    <input
         type="text"
         value={username}
         onChange={handleUserNameChange}
       />
      </div>
      <div>
      <label>password:</label>
    <input
         type="password"
         value={password}
         onChange={handlesetPasswordChange}
       />
      </div>
      <button type="submit">Login</button>
    </form>
    
  );
 
};

export default Login