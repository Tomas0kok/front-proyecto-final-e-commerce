import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import FreeContent from "../pages/FreeContent";
import Store from "../pages/Store";
import Home from "../pages/Home";
import HomeStore from "../pages/HomeStore";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Contiene Navbar + Footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/servicios",
        element: <Services />,
      },
      {
        path: "/Gratis",
        element: <FreeContent />,
      },
      {
        path: "/tienda",
        element: <Store />,
      },
      {
        path: "/HomeStore",
        element: <HomeStore />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
