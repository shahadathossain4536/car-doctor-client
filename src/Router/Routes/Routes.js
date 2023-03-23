import Login from "../../Layout/Login";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn";
import SignUp from "../../Pages/Login/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Test from "../../Pages/test/Test";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/serviceDetails",
        element: <ServiceDetails />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
