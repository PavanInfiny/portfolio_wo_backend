import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Projectspage from "./pages/Projectspage.jsx";
import ProjectPageitem from "./components/ProjectPageitem.jsx";
import Admin from "./pages/admin.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/projects/:id",
    element: <Projectspage></Projectspage>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
  }
]);

export default Router;
