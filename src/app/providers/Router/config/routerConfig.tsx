import { AppRoutes, RoutesPath } from "shared/config/routes";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { RouteProps } from "react-router-dom";

export const routerConfig: Record<AppRoutes, RouteProps> ={
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath.about,
        element: <AboutPage/>
    }
}