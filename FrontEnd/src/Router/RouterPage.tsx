import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from '../App';
import DavningTimeDash from '../Vies/dasboard/DavningTimeDash';
import DvarTorah from '../Vies/dasboard/DvarTorah';
import Reg from '../Vies/dasboard/Reg';
import ShabbatTime from '../Vies/dasboard/ShabbatTime';
import Update from '../Vies/dasboard/Update';
import Deshboad from '../Vies/deshboad';
// import DvarTorah from "../Vies/dasboard/DvarTorah";
import HomePage from '../Vies/HomePage';
import Login from '../Vies/login';
import ProtectedRout from './ProtectedRout';
// import Reg from "../Vies/dasboard/Reg";
// import ShabbatTime from "../Vies/dasboard/ShabbatTime";
// import Update from "../Vies/dasboard/Update";

const RouterPage = () => {
  const routerMain = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRout>
              <Deshboad />
            </ProtectedRout>
          }
        >
          <Route path="reg" element={<Reg />} />
          <Route path="dvarTorah" element={<DvarTorah />} />
          <Route path="shabbatTime" element={<ShabbatTime />} />
          <Route path="update" element={<Update />} />
          <Route path="davningTime" element={<DavningTimeDash />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routerMain} />;
};

export default RouterPage;
