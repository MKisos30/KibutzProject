import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Deshboad from "../Vies/deshboad";
import HomePage from "../Vies/HomePage";
import Login from "../Vies/login";
import Reg from "../Vies/reg";

const RouterPage = () => {
  const routerMain = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        <Route index element={<  HomePage />}/>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Deshboad />}>
          <Route path="reg" element={<Reg />} />
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={routerMain}/>
}

export default RouterPage