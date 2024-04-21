import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import About from "../Components/Pages/About";
import Team from "../Components/Pages/Team";
import Layouts from "../Components/Layouts";
import Update from "../Components/Update";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/team",
        element: <Team></Team>,
        loader: ()=> fetch('http://localhost:5000/user')
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/user/${params.id}`)
      }
    ],
  },
]);
