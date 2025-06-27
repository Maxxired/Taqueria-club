import type { RouteObject } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Platillos from "./Platillos";

export const HomeRoutes: RouteObject[] = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dishes",
        element: <Platillos />
    }
]