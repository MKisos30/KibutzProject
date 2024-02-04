import { FC, useEffect, useState } from "react"
import axios from 'axios'
import Form from "../UI/Form/Form"


const inputsDavningTime = [
    {InputId: "title", name: "title", labelValue: "שם הפרשה"},
    {InputId: "minchaErevShabbat", name: "minchaErevShabbat", labelValue: "מנחה ערב שבת"},
    {InputId: "shacharit", name: "shacharit", labelValue: "שחרית"},
    {InputId: "mincha", name: "mincha", labelValue: "מנחה"},
    {InputId: "arvit", name: "arvit", labelValue: "ערבית"},
]

export interface Davning {
    title: string,
    minchaErevShabbat: string,
    shacharit: string,
    mincha: string,
    arvit: string
}

const DavningTimeDash: FC = () => {
  const [time, setTime] = useState<Davning>({
    title:"",
    minchaErevShabbat:"",
    shacharit:"",
    mincha:"",
    arvit:""
  })

  const [message, setMessage] = useState("")

  const getDavningTime = async () => {
    const { data } = await axios.get('http://localhost:8787/deshboard/davningTime')
    console.log(data)

    if(data.continue) return setTime({
      title: data.davningTime[0].title, 
      minchaErevShabbat: data.davningTime[0].minchaErevShabbat,
      shacharit: data.davningTime[0].shacharit,
      mincha: data.davningTime[0].mincha,
      arvit: data.davningTime[0].arvit,
  
    })

    if (!data.continue) return setMessage(data.message)

  }

  useEffect(() => {
      getDavningTime()
  }, [])




  return (
    <div>
        <Form subFuntion={getDavningTime}>
            {inputsDavningTime.map((inp, i) => {
                <div key={i}>
                <label htmlFor={inp.InputId}>{inp.labelValue}</label>
                <input id={inp.InputId} type="text" name={inp.name} /> 
                </div>
            })
            }
        </Form>
      
        <p>{message.length > 0 ? message : null}</p>
        <h2>פרשה: {time.title}</h2>
        <h2>קבלת שבת: {time.minchaErevShabbat}</h2>
        <h2>שחרית: {time.shacharit}</h2>
        <h2>מנחה: {time.mincha}</h2>
        <h2>ערבית: {time.arvit}</h2>
    </div>
  )
}

export default DavningTimeDash


   


