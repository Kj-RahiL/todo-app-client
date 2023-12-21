import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SignUp from "../Pages/Register/SignUp";
import SignIn from "../Pages/Register/SignIn";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "addTask",
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    },
    {
        path:'/signIn',
        element:<SignIn></SignIn>
    }
]);

export default router;