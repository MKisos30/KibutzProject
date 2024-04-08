// import Form from './UI/Form/Form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const inputsLog = [
  { inputId: 'userEmail', name: 'email', labelValue: 'אימייל' },
  { inputId: 'userPass', name: 'password', labelValue: 'סיסמא' },
];

const Login = () => {
  const navigate = useNavigate();

  const userLoginFunc = async (evnt: any) => {
    evnt.preventDefault();

    const mail = evnt.target.elements.userEmail.value
    const password = evnt.target.elements.userPass.value

    const {data} = await axios.post("http://localhost:8787/auth/login", {mail, password})
    console.log(data)

    if(data.continue) {
      localStorage.setItem("token", data.token)
      return navigate("/dashboard/dvarTorah", {replace: true})
    }
  };

  return (
    <div className="loginDiv">
      <h1>כניסה לאתר</h1>
      <form className="loginDiv__form" onSubmit={userLoginFunc}>
        {inputsLog.map((inp, i) => (
          <div key={i}>
            <label htmlFor={inp.inputId}>{inp.labelValue}</label>
            <input id={inp.inputId} type={inp.name === "password"? "password" : "text"} name={inp.name} />
          </div>
        ))}
        <button type="submit">כניסה</button>
      </form>
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
