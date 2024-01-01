import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "../layout";
import AboutUs from "../pages/AboutUs";
import Careers from "../pages/Careers";
import Community from "../pages/Community";
import NotFound from "../pages/NotFound";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
