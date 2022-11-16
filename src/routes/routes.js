import HeaderOnly from '../layouts/HeaderOnly'

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login, layout: HeaderOnly },
];

export { publicRoutes };
