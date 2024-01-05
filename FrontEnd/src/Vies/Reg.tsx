import React from 'react';
import Form from './UI/Form/Form';

const inputsReg = [
  {inputId: "userName", name: "name", labelValue: "שם משתמש"},
  {inputId: "userEmail", name: "email", labelValue: "אימייל"},
  {inputId: "userPass", name: "password", labelValue: "סיסמא"},
]
const Reg = () => {
  return (
    <div>
      <Form>
        {inputsReg.map(inp=>(
          <>
          <label for={inp.inputId}>{inp.labelValue}</label>
          <input id={inp.inputId} type="text" name={inp.name} />
          </>

        ))}
        {/* <label for="userName">שם משתמש</label>
        <input id="userName" type="text" name="name" />

        <label for="userEmail">אימייל</label>
        <input id="userEmail" type="text" name="email" />

        <label for="userPass">סיסמא</label>
        <input id="userPass" type="text" name="password" /> */}
      </Form>
    </div>
  );
};

export default Reg;
