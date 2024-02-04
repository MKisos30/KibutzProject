import { useEffect, useState } from 'react'
import axios from 'axios'
import { Davning } from '../dasboard/DavningTimeDash'

const DavningTime = () => {

  const [info, setInfo] = useState<Davning>({
    title: "",
    minchaErevShabbat: "",
    shacharit: "",
    mincha: "",
    arvit: ""
  })

  const [message, setMessage] = useState("")

  const getDavningTime = async () => {
    const {data} = await axios.get("http://localhost:8787/deshboard/davningTime")
    console.log(data)

    if(data.continue) return setInfo({
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
      <h2>שם הפרשה: {info.title}</h2>
      <p>מנחה ערב שבת: {info.minchaErevShabbat}</p>
      <p>שחרית: {info.shacharit}</p>
      <p>מנחה: {info.mincha}</p>
      <p>ערבית: {info.arvit}</p>
    </div>
  )
}

export default DavningTime

