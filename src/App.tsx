import {useRoutes, type RouteObject} from "react-router-dom"
import Home from "./pages/Home/Home.tsx";


const AppRoutes: React.FC = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/home",
            element: <Home/>
        }
    ]
    return useRoutes(routes);
}

export default AppRoutes;