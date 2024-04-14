import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Middle from './Middlecontainer/Middle'
import Footer from '../Footer'
import Home from '../pages/Home'
import Login from './Navbar/Login'
import Signup from './Navbar/Signup'

function AppRouter() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<Middle/>} />
        <Route path="contact" element={<Footer/>} />
        <Route path='login' element = {<Login/>}/>
        <Route path='signup' element = {<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter