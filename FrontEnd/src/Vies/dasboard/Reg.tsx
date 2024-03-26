import { useState } from 'react';
import axios from '../../../node_modules/axios/index';
import Form from '../UI/Form/Form';

const inputsReg = [
  { inputId: 'userName', name: 'name', labelValue: 'שם משתמש' },
  { inputId: 'userEmail', name: 'email', labelValue: 'אימייל' },
  { inputId: 'userPass', name: 'password', labelValue: 'סיסמא' },
];

const Reg = () => {
  const [message, setMessage] = useState<string>()
  const userReg = async (ev: any) => {
    ev.preventDefault();

    const token = localStorage.getItem('token')
    console.log(token)

    const name = ev.target.elements.userName.value
    const mail = ev.target.elements.userEmail.value
    const password = ev.target.elements.userPass.value

    const {data} = await axios.post(`http://localhost:8787/auth/register?token=${token}`, {name, mail, password})
    console.log(data)
    return setMessage(data.message)
  }

  return (
    <div>
      <p>{message}</p>
      <Form subFuntion={userReg}>
        {inputsReg.map((inp, i) => (
          <div key={i}>
            <label htmlFor={inp.inputId}>{inp.labelValue}</label>
            <input id={inp.inputId} type={inp.name === "password"? "password" : "text"} name={inp.name} />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default Reg;

/* <label for="userName">שם משתמש</label>
<input id="userName" type="text" name="name" />

<label for="userEmail">אימייל</label>
<input id="userEmail" type="text" name="email" />

<label for="userPass">סיסמא</label>
<input id="userPass" type="text" name="password" /> */