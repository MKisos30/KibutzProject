import React, { useState } from 'react'
import Form from './UI/Form/Form'

const DvarTorah = () => {
  const [text, setText] = useState<string>("")

  const getDvarTora = () =>{
    // const { data }
    //setText(data)
  }
  
  const postDvarTora = (ev: any) => {
    ev.preventDefault()
    
    //const {data} = .....
    //setText(data)
  }


  return (
    <div>
        <h2>DvarTorah</h2> 
        <Form>
          <textarea rows="10" cols="50" placeholder="הכנס טקסט...">
            {text}
          </textarea>
        </Form>
    </div>
  )
}

export default DvarTorah
