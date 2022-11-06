import Page404 from "./components/404";
import Home from "./Home";

let routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    component: Page404,
    exact: true,
  },
];

export default routes;
