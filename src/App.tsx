import { useRoutes, type RouteObject } from "react-router-dom"
import Layout from "./Layout/MainLayout.tsx";
import { HomeRoutes } from "./pages/HomeRoutes.tsx";


const AppRoutes: React.FC = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <Layout />,
            children: [
                ...HomeRoutes
            ]
        },

    ]
    return useRoutes(routes);
}

export default AppRoutes;