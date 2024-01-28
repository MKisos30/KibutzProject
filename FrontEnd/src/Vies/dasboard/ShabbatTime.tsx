import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../UI/Form/Form'

const inputsShabbatTime = [
  { InputId: "nameOfParasha", name: "parashaNmae", labelValue: "שם הפרשה" },
  { InputId: "enterTelAviv", name: "enterTelAviv", labelValue: "כניסת שבת תל אביב" },
  { InputId: "enterHaifa", name: "enterHaifa", labelValue: "כניסת שבת חיפה" },
  { InputId: "enterEilat", name: "enterEilat", labelValue: "כניסת שבת אילת" },
  { InputId: "exitTelAviv", name: "exitTelAviv", labelValue: "יציאת שבת תל אביב" },
  { InputId: "exitrHaifa", name: "exitrHaifa", labelValue: "יציאת שבת חיפה" },
  { InputId: "exitrEilat", name: "exitrEilat", labelValue: "יציאת שבת אילת" },
]

export interface Shbbat {
  parasha: string,
  enterTelAviv: string,
  enterHaifa: string,
  enterEilat: string,
  exitTelAviv: string,
  exitrHaifa: string,
  exitrEilat: string
}

const ShabbatTime: FC = () => {
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


  const shabbatTimeUpdate = async (ev: any) => {
    ev.preventDefault();

    // enterTelAviv, enterHaifa, enterEilat, exitTelAviv, exitrHaifa, exitrEilat
    const parasha = ev.target.elements.parashaNmae.value;
    const enterTelAviv = ev.target.elements.enterTelAviv.value;
    const enterHaifa = ev.target.elements.enterHaifa.value;
    const enterEilat = ev.target.elements.enterEilat.value;
    const exitTelAviv = ev.target.elements.exitTelAviv.value;
    const exitrHaifa = ev.target.elements.exitrHaifa.value;
    const exitrEilat = ev.target.elements.exitrEilat.value;


    console.log(parasha, enterTelAviv, enterHaifa, enterEilat, exitTelAviv, exitrHaifa, exitrEilat)

    const { data  } = await axios.post('http://localhost:8787/deshboard/shabbatTime', {parasha, enterTelAviv, enterHaifa, enterEilat, exitTelAviv, exitrHaifa, exitrEilat})
    // const {continue, message} = data

    if(data.continue) return setInfo({parasha, enterTelAviv, enterHaifa, enterEilat, exitTelAviv, exitrHaifa, exitrEilat})
    if(!data.continue) return setMessage(data.message)
  }
  
  return (
    <div>
      <Form subFuntion={shabbatTimeUpdate}>
        {inputsShabbatTime.map((inp, i) => (
                   <div key={i}>
            <label htmlFor={inp.InputId}>{inp.labelValue}</label>
            <input id={inp.InputId} type="text" name={inp.name} />
          </div>
        ))}
      </Form>

      <p>{message.length > 0 ? message : null}</p>
      <h2>פרשה: {info.parasha}</h2>
      <h2>כניסת שבת תל אביב: {info.enterTelAviv}</h2>
      <h2>כניסת שבת חיפה: {info.enterHaifa}</h2> 
      <h2>כניסת שבת אילת: {info.enterEilat}</h2> 
      <h2>יציאת שבת תל אביב: {info.exitTelAviv}</h2> 
      <h2>יציאת שבת חיפה: {info.exitrHaifa}</h2> 
      <h2>יציאת שבת אילת: {info.exitrEilat}</h2> 
    </div>
  )
}

export default ShabbatTime
