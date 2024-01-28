import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import DvarTorah from "../Vies/dasboard/DvarTorah";
import Reg from "../Vies/dasboard/Reg";
import ShabbatTime from "../Vies/dasboard/ShabbatTime";
import Update from "../Vies/dasboard/Update";
import Deshboad from "../Vies/deshboad";
// import DvarTorah from "../Vies/dasboard/DvarTorah";
import HomePage from "../Vies/HomePage";
import Login from "../Vies/login";
// import Reg from "../Vies/dasboard/Reg";
// import ShabbatTime from "../Vies/dasboard/ShabbatTime";
// import Update from "../Vies/dasboard/Update";

const RouterPage = () => {
  const routerMain = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        <Route index element={<  HomePage />}/>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Deshboad />}>
          <Route path="reg" element={<Reg />} />
          <Route path="dvarTorah" element={<DvarTorah />} />
          <Route path="shabbatTime" element={<ShabbatTime />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={routerMain}/>
}

export default RouterPage