import axios from 'axios'
import { useState, useEffect } from 'react'
import { Shbbat } from '../dasboard/ShabbatTime'


const ShabbatTime = () => {

  const [info, setInfo] = useState<Shbbat>({
    parasha:"", 
    enterTelAviv:"", 
    enterHaifa:"", 
    enterEilat:"", 
    exitTelAviv:"",
    exitrHaifa:"",
    exitrEilat:""
  })

  const [message, setMessage] = useState("")

  const getShabbatTime = async () => {
    const {data} = await axios.get("http://localhost:8787/deshboard/getShabbatTime")
    console.log(data)
    console.log(data.shabbat[0])

    if(data.continue) return setInfo({
      parasha: data.shabbat[0].nameOfParasha, 
      enterTelAviv: data.shabbat[0].enterTelAviv, 
      enterHaifa: data.shabbat[0].enterHaifa,
      enterEilat: data.shabbat[0].enterEilat,
      exitTelAviv: data.shabbat[0].exitTelAviv,
      exitrHaifa: data.shabbat[0].exitrHaifa,
      exitrEilat: data.shabbat[0].exitrEilat,
    })

    if(!data.continue) return setMessage(data.message)
    //setInfo(data)
    //setInfo()
  }

  useEffect(()=>{
    getShabbatTime()
  },[])


  return (
    <div>
      <h2>שם הפרשה: {info.parasha}</h2>
      <div>
            <h4>זמני כניסה שבת:</h4>
            <p>תל אביב: {info.enterTelAviv}</p>
            <p>חיפה: {info.enterHaifa}</p>
            <p>אילת: {info.enterEilat}</p>
      </div>
      <div>
            <h4>זמני יציאת שבת:</h4>
            <p>תל אביב: {info.exitTelAviv}</p>
            <p>חיפה: {info.exitrHaifa}</p>
            <p>אילת: {info.exitrEilat}</p>
      </div>
        
    </div>
  )
}

export default ShabbatTime
