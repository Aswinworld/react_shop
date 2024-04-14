import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
    <a className="active" href="#home">Home</a>
    <Link to='/about'>Cart</Link>
  </div>
  </div>
  )
}

export default Sidebar