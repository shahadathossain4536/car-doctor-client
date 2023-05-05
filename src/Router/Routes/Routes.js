import Login from "../../Layout/Login";
import Main from "../../Layout/Main";
import AddNewService from "../../Pages/AddNewService/AddNewService";
import CartDetails from "../../Pages/CartDetails/CartDetails";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn";
import SignUp from "../../Pages/Login/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";
import Orders from "../../Pages/Orders/Orders";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Test from "../../Pages/test/Test";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-mu.vercel.app/service/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceDetails",
        element: <ServiceDetails />,
      },
      {
        path: "/addNewService",
        element: <AddNewService />,
      },
      {
        path: "/cartDetails",
        element: <CartDetails />,
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
