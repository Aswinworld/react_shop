import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Middle from '../components/Middlecontainer/Middle'
import './home.css'

function Home() {
  return (
    <>
    <div className = "navbar">
     <Navbar/>
     </div>
     <div className= "sidebar">
        <Sidebar/>
    </div>
    <div className= "middle">
    <Middle/>
    </div>
    
    </>

  )
}

export default Home