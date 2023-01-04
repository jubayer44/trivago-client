import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CreatePassword from "../Pages/Login/CreatePassword";
import LoginPassword from "../Pages/Login/LoginPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/CreatePassword/:id",
        element: <CreatePassword/>
    },
    {
        path: "/loginPassword/:id",
        element: <LoginPassword/>,
        loader: ({params})=> fetch(`http://localhost:5000/loginPassword/${params.id}`)
    }
]);

export default router;