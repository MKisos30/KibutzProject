import {useEffect, useState} from 'react'
import axios from '../../../node_modules/axios/index';
import Form from '../UI/Form/Form'

const inputUpdate = [
  { inputId: "timeUpdate", name: "time", labelValue: "זמן עדכון"},
  { inputId: "textUpdate", name: "text", labelValue: "טקסט עדכון"},
];

export interface NewsUpdates {
  time: string,
  text: string
}


const Update = () => {
  const [kibutzUpdate, setKibutzUpdate]= useState<Array<NewsUpdates>>([])

  const getKibutzUpdates = async () => {
    const {data} = await axios.get("http://localhost:8787/deshboard/getKibotzUpdate")
    return setKibutzUpdate(data.newsUpdates)
  }

  useEffect(()=>{
    getKibutzUpdates()
  },[])

  const updateInformation = async (ev: any) => {
    ev.preventDefault();

    const time = ev.target.elements.time.value
    const text = ev.target.elements.text.value

    console.log( time, text )

    const { data } = await axios.post('http://localhost:8787/deshboard/postKibotzUpdate', { time, text })
    console.log(data)

    return setKibutzUpdate([...kibutzUpdate, data.newKibutzUpdate])
  }

  return (
    <div>
      <Form subFuntion={updateInformation}>
        {inputUpdate.map((inp, i) => (
          <div key={i}>
            <label htmlFor={inp.inputId}>{inp.labelValue}</label>
            <input id={inp.inputId} type={inp.name==="time" ? "time":"text"} name={inp.name} /> 
          </div>
        ))}
      </Form>

      {kibutzUpdate.map((up, index)=> (
        <div key={index}>
          <h2>{up.time}</h2>
          <p>{up.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Update
