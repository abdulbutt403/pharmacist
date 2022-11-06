import Page404 from "./components/404";
import Auth from "./components/Auth";
import Home from "./Home";

let routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Auth,
    exact: true,
  },
  {
    component: Page404,
    exact: true,
  },
];

export default routes;
