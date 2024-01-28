import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from '../../node_modules/axios/index';

const Deshboad = () => {
  // const dashboardData = async () => {

  //   const { data } = await axios.get

  // }

  return (
    <div> 
        <Outlet />
        <p>

        </p>

    </div>
  )
}

export default Deshboad