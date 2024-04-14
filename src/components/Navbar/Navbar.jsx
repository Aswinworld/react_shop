import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      
      <div className="topnav">
        <div className = "sighnup">
          <Link to= 'login' > Login</Link>
          <Link to= 'signup' > Signup</Link>
    </div>
  </div>
    </>
  )
}

export default Navbar