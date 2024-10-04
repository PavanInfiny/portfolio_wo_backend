import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Projectspage from "./pages/Projectspage.jsx";
import ProjectPageitem from "./components/ProjectPageitem.jsx";
ProjectPageitem
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/projects",
    element: <Projectspage />,
  },
  {
    path: `/projects/:id`,
    element: <Projectspage></Projectspage>,
  },
]);

export default Router;
