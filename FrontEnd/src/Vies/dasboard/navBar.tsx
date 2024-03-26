import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const exitAdmin = () => {

       localStorage.removeItem('token')
       return navigate('/', {replace: true})
    }

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

      <button onClick={exitAdmin}>
          יציאה
      </button>
    </div>
  )
}

export default NavBar
