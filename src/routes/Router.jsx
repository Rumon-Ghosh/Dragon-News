import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../layouts/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../layouts/NewsDetails";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Loading from "../components/Loading";
import About from "../pages/About";
import Careers from "../pages/Careers";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/career',
        element: <Careers></Careers>
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        // path: '/auth/login',
        index: true,
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/news-details/:id',
    element: (
      <PrivateRoutes>
      <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: '/*',
    element: <h1>Page Not Found - 404</h1>
  },
])