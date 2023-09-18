import { lazy } from "react";

// project imports
import Loadable from "./../ui-component/Loadable";
// main routing
const Structure = Loadable(lazy(() => import("../layout/Structure.jsx")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const AllAmbulance = Loadable(
  lazy(() => import("../pages/ambulance/AllAmbulance"))
);
const ErrorPage = Loadable(lazy(() => import("./../pages/ErrorPage")));
// ==============================| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <Structure />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ambulance",
      element: <AllAmbulance />,
    },
  ],
};
export default MainRoutes;
