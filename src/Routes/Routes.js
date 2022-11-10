import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddNewService from "../Pages/AddNewService/AddNewService";
import AddReviews from "../Pages/AddReviews/AddReviews";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivetRoute from "../Pages/PrivetRoute/PrivetRoute";
import Register from "../Pages/Register/Register";
import SingleService from "../Pages/SingleService/SingleService";

export const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://travellian-server.vercel.app/limitservices'),
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://travellian-server.vercel.app/services/${params.id}`),
                element: <SingleService></SingleService>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/addservice',
                element: <PrivetRoute><AddNewService></AddNewService></PrivetRoute>
            },
            {
                path: '/reviews',
                element: <PrivetRoute><AddReviews></AddReviews></PrivetRoute>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>,
    }
])