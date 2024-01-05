import Form from './UI/Form/Form';
// import axios from 'axios';
const inputsLog = [
  { inputId: 'userEmail', name: 'email', labelValue: 'אימייל' },
  { inputId: 'userPass', name: 'password', labelValue: 'סיסמא' },
];

const Login = () => {
  const userLoginFunc = async (evnt: any) => {
    evnt.preventDefault()

    console.log(evnt)
    //ev.preventDefault();

    //const mail = ev.target.elements.userEmail.value
    //const password = ev.target.elements.userPass.value

    //console.log(mail, password)

    // const {data} = await axios.post("http://localhost:8787/auth/login", {mail, password})
    // console.log(data)
  }

  return (
    <div>
      <h1>Login</h1>
      <Form subFunction={userLoginFunc}>
        {inputsLog.map((inp, i) => (
          <div key={i}>
            <label htmlFor={inp.inputId}>{inp.labelValue}</label>
            <input id={inp.inputId} type="text" name={inp.name} />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default Login;

/* <Form>
  <label for="userEmail">אימייל</label>
  <input id="userEmail" type="text" name="email" />

  <label for="userPass">סיסמא</label>
  <input id="userPass" type="text" name="password" />
</Form> */
