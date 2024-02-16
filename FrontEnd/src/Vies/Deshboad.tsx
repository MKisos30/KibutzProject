import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import axios from '../../node_modules/axios/index';

const Deshboad = () => {
  // const dashboardData = async () => {

  //   const { data } = await axios.get

  // }

  return (
    <div> 
      <nav>
        <Link to="/dashboard/reg">
          הרשמה חדשה
        </Link>
        <Link to="/dashboard/dvarTorah">
          דבר תורה
        </Link>
        <Link to="/dashboard/shabbatTime">
          זמני שבת
        </Link>
        <Link to="/dashboard/update">
         עידכונים מקומיים
        </Link>
        <Link to="/dashboard/davningTime">
         זמני תפילות
        </Link>
      </nav>
        <Outlet />
    </div>
  )
}

export default Deshboad