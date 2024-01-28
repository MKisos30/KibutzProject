import React from 'react'
import axios from '../../../node_modules/axios/index';
import Form from '../UI/Form/Form'

const inputUpdate = [
  { inputId: "timeUpdate", name: "time", labelValue: "זמן עדכון"},
  { inputId: "textUpdate", name: "text", labelValue: "טקסט עדכון"},
];

const Update = () => {
  const updateInformation = async (ev: any) => {
    ev.preventDefault();

    const updateTime = ev.target.elements.time.value
    const updateText = ev.target.elements.text.value

    console.log( updateTime, updateText )

    const { data } = await axios.post('http://localhost:8787/deshboard/update', { updateTime, updateText })
  }

  return (
    <div>
      <Form subFuntion={updateInformation}>
        {inputUpdate.map((inp, i) => (
          <div key={i}>
            <label htmlFor={inp.inputId}>{inp.labelValue}</label>
            <input id={inp.inputId} type="text" name={inp.name} /> 
          </div>
        ))}
      </Form>
    </div>
  )
}

export default Update
