import React from 'react'
import DavningTime from './Components/DavningTime'
import DvarTorahText from './Components/DvarTorahText'
import ShabbatTime from './Components/ShabbatTime'

const HomePage = () => {
  return (
    <div>

        <ShabbatTime />

        <DvarTorahText />    

        <DavningTime />

        <div>
            <h3>עידכונים:</h3>
            <p></p>
    </div>

        
        
        <div>
            <h3>עידכונים:</h3>
            <p></p>
        </div>
    </div>
  )
}

export default HomePage