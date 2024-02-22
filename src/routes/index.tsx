import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { PageNotFound } from "../pages/PageNotFound";
import { AuthLayout } from "../layouts/AuthLayout";
import { useAuth } from "../hooks/useAuth";

export const AppRoutes = () => {
    const { user } = useAuth();

    console.log("user", user);

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({path, element, authRequired}) => {
                    if (authRequired && !user) return;

                    const Layout = authRequired ? AuthLayout : AuthLayout;

                    return (
                        <Route
                            key={path}
                            path={path}
                            element={<Layout>{element}</Layout>}
                        />
                    )
                })}

                <Route
					path='/*'
					element={
						<PageNotFound />
					}
				/>
            </Routes>
        </BrowserRouter>
    );
}