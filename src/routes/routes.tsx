import { ReactNode } from "react";
import { LoginPage } from "../pages/Login";

type RouteElement = {
    path: `/${string}`,
    authRequired: boolean,
    element: ReactNode
}

export const routes: RouteElement[] = [
    {
        path: '/login',
        authRequired: false,
        element: <LoginPage />
    },
    {
        path: '/home',
        authRequired: true,
        element: <span>home</span>
    }
]