import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleService from "../Pages/SingleService/SingleService";

export const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/limitservices'),
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
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <SingleService></SingleService>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>,
    }
])