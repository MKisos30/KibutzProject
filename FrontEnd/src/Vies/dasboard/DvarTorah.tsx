import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../UI/Form/Form'

interface DvarTorahInfo {
  title: string,
  dvarTorahText: string
}

const DvarTorah = () => {
  const [text, setText] = useState<DvarTorahInfo>({title:"", dvarTorahText:""})
  const [message, setMessage] = useState("")

  const getDvarTora = async () =>{

    const {data} = await axios.get('http://localhost:8787/deshboard/getDvarTorah')
    console.log(data) 

    if(data.continue) return setText({title: data.dvarTora[0].title, dvarTorahText: data.dvarTora[0].dvarTorahText})
    if(!data.continue) return setMessage(data.message)
  }

  useEffect(()=> {
    getDvarTora()
  },[])
  
  const postDvarTora = async (ev: any) => {
    ev.preventDefault()

    const title = ev.target.elements.title.value
    const dvarTorahText = ev.target.elements.dvarTorahText.value
    // console.log(title, dvarTorahText )
    const {data} = await axios.post('http://localhost:8787/deshboard/dvarTorah', {title, dvarTorahText})
    console.log(data)
    if(data.continue) return setText({title, dvarTorahText})
    if(!data.continue) return setMessage(data.message)
    
  }


  return (
    <div>
        <h2>DvarTorah</h2> 
        <Form subFuntion={postDvarTora}>
          <input type="text" name="title" placeholder="כותרת"/>
          <textarea rows="10" cols="50" placeholder="הכנס טקסט..." name="dvarTorahText">
            {text.dvarTorahText}
          </textarea>
        </Form>
        <h2>{text.title}</h2>
        <p>{text.dvarTorahText}</p>
    </div>
  )
}

export default DvarTorah
