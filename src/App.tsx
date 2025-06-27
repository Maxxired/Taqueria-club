import { useRoutes, type RouteObject } from "react-router-dom"
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Platillos from "./pages/Platillos.tsx";


const AppRoutes: React.FC = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/landing",
            element: <Home />
        },
        {
            path: "/dishes",
            element: <Platillos />
        }
    ]
    return useRoutes(routes);
}

export default AppRoutes;