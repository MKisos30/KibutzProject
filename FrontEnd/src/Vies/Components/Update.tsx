import { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsUpdates } from '../dasboard/Update'

const Update = () => {
    const [kibutzUpdate, setKibutzUpdate]= useState<Array<NewsUpdates>>([])

    const getKibutzUpdates = async () => {
      const {data} = await axios.get("http://localhost:8787/deshboard/getKibotzUpdate")
      return setKibutzUpdate(data.newsUpdates)
    }
  
    useEffect(()=>{
      getKibutzUpdates()
    },[])


  return (
    <div>
        <h1>עידכונים:</h1>
      {kibutzUpdate.map((up, i) => (
          <div>
              <h2>{up.time}</h2>
              <p>{up.text}</p>
          </div>
      ))}
    </div>
  )
}

export default Update
