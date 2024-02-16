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

  const [message, setMessage] = useState("")

  const [time, setTime] = useState<Davning>({
    title:"",
    minchaErevShabbat:"",
    shacharit:"",
    mincha:"",
    arvit:""
  })


  const postDavningTime = async (ev: any) => {
    ev.preventDefault();

    const title = ev.target.elements.title.value;
    const minchaErevShabbat = ev.target.elements.minchaErevShabbat.value;
    const shacharit = ev.target.elements.shacharit.value;
    const mincha = ev.target.elements.mincha.value;
    const arvit = ev.target.elements.arvit.value;

    console.log(title, minchaErevShabbat, shacharit, mincha, arvit)

    const { data } = await axios.post('http://localhost:8787/deshboard/davningTime', {title, minchaErevShabbat, shacharit, mincha, arvit})

    if (data.continue) return setTime({title, minchaErevShabbat, shacharit, mincha, arvit})
    if (!data.continue) return setMessage(data.message)
  }


  const getDavningTime = async () => {
    const { data } = await axios.get('http://localhost:8787/deshboard/getDavningTime')
    console.log(data)

    if(data.continue) return setTime({
      title: data.davning[0].title, 
      minchaErevShabbat: data.davning[0].minchaErevShabbat,
      shacharit: data.davning[0].shacharit,
      mincha: data.davning[0].mincha,
      arvit: data.davning[0].arvit,
  
    })

    if (!data.continue) return setMessage(data.message)
  }

  useEffect(() => {
      getDavningTime()
  }, [])


  return (
    <div>
        <Form subFuntion={postDavningTime}>
            {inputsDavningTime.map((inp, i) => (
              
                <div key={i}>
                <label htmlFor={inp.InputId}>{inp.labelValue}</label>
                <input id={inp.InputId} type={inp.name == "title" ? "text":"time"} name={inp.name} /> 
                </div>
              
            ))
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


