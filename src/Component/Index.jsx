import React from 'react'
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import  Footer from "../Component/Footer"

const Index = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default Index
