import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import WelcomePage from "../Pages/Home/WelcomePage";
import EstateDetails from "../Pages/EstateDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PrivateRoutes from "../Components/Private Routes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound></NotFound>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <WelcomePage></WelcomePage>
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => fetch('https://dominic009.github.io/Estate-API-Data/datas.json'),
      },
      {
        path: '/home/:id',
        element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
        loader: async () => fetch('https://dominic009.github.io/Estate-API-Data/datas.json')
      },
      {
        path: "/updateProfile",
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>,
      },
      {
        path: "/userProfile",
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/contactUs',
        element: <Contact></Contact>
      },
      {
        path: '/aboutus',
        element: <About></About>
      }
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
