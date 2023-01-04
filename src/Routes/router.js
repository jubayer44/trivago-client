import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CreatePassword from "../Pages/Login/CreatePassword";
import LoginPassword from "../Pages/Login/LoginPassword";
import TopCities from "../Pages/DestinationsCards/TopCities";
import Cities from "../Pages/Cities/Cities";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                children: [{
                    path: "/",
                    element: <TopCities/>
                }]
            },
            {
                path: "/city/:id",
                element: <Cities/>
            }
            
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
        loader: ({params})=> fetch(`${process.env.REACT_APP_url}/loginPassword/${params.id}`)
    }
]);

export default router;