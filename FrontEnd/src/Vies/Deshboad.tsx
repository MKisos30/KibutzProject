import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './dasboard/navBar'

const Deshboad = () => {

  return (
    <div> 
      
        <NavBar />
        <Outlet />
        
    </div>
  )
}

export default Deshboad