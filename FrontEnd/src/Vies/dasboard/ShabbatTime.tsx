import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../UI/Form/Form'

const inputsShabbatTime = [
  { InputId: "nameOfParasha", name: "parashaNmae", labelValue: "שם הפרשה" },
  { InputId: "enterTime", name: "enterShabbatTime", labelValue: "כניסת שבת" },
  { InputId: "exitTime", name: "exitShabbatTime", labelValue: "יציאת שבת" },
]

interface Shbbat {
  parasha: string, shabbatEnter: string, shabbatExit: string,
}

const ShabbatTime: FC = () => {
  const [info, setInfo] = useState<Shbbat>({parasha:"", shabbatEnter:"", shabbatExit:""})
  const [message, setMessage] = useState("")

  const getShabbatTime = async () => {
    const {data} = await axios.get("http://localhost:8787/deshboard/getShabbatTime")
    console.log(data)
    console.log(data.shabbat[0])

    if(data.continue) return setInfo({parasha: data.shabbat[0].nameOfParasha, shabbatEnter: data.shabbat[0].enterTime, shabbatExit: data.shabbat[0].exitTime })
    if(!data.continue) return setMessage(data.message)
    //setInfo(data)
    //setInfo()
  }

  useEffect(()=>{
    getShabbatTime()
  },[])


  const shabbatTimeUpdate = async (ev: any) => {
    ev.preventDefault();

    const parasha = ev.target.elements.parashaNmae.value;
    const shabbatEnter = ev.target.elements.enterShabbatTime.value;
    const shabbatExit = ev.target.elements.exitShabbatTime.value;

    console.log(parasha, shabbatEnter, shabbatExit)

    const { data  } = await axios.post('http://localhost:8787/deshboard/shabbatTime', {parasha, shabbatEnter, shabbatExit})
    // const {continue, message} = data

    if(data.continue) return setInfo({parasha, shabbatEnter, shabbatExit})
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

          {/* להוסיף חלונית מידע במידה ואין מידע על זמנים */}
      <p>{message.length > 0 ? message : null}</p>
      <h2>{info.parasha}</h2>
      <h2>{info.shabbatEnter}</h2> {/* tel aviv, jerusalem, haifa */}
      <h2>{info.shabbatExit}</h2> {/* tel aviv, jerusalem, haifa */}
    </div>
  )
}

export default ShabbatTime
