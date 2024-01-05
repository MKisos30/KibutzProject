import React from 'react';
import Form from './UI/Form/Form';

const inputsLog = [
  { inputId: 'userEmail', name: 'email', labelValue: 'אימייל' },
  { inputId: 'userPass', name: 'password', labelValue: 'סיסמא' },
];

const Login = () => {
  return (
    <div>
      <Form>
        {inputsLog.map((inp) => (
          <>
            <label for={inp.inputId}>{inp.labelValue}</label>
            <input id={inp.inputId} type="text" name={inp.name} />
          </>
        ))}
      </Form>

      {/* <Form>
        <label for="userEmail">אימייל</label>
        <input id="userEmail" type="text" name="email" />

        <label for="userPass">סיסמא</label>
        <input id="userPass" type="text" name="password" />
      </Form> */}
    </div>
  );
};

export default Login;
