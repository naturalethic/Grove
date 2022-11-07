import { lazy, LazyExoticComponent, ReactElement } from "react";
import { Route as FrameworkRoute, Routes } from "react-router-dom";

interface Route {
    path: string;
    element: LazyExoticComponent<any>;
    children: Route[];
}

function importRoutes(): Route[] {
    const routes = Object.entries(
        import.meta.glob("/app/web/**/[a-z[]*.tsx"),
    ).map(([path, load]) => {
        const [_, name] = path.match(/\/app\/web\/(.*)\.tsx/) ?? [];
        return {
            path: `/${name.replace(/(\/)?index$/, "")}`,
            element: lazy(load as () => Promise<{ default: any }>),
            children: [],
        };
    });

    routes.sort((a: Route, b: Route) => a.path.localeCompare(b.path));
    return routes;
}

function buildRouteTree(routes: Route[]): Route {
    let root: Route;

    routes.forEach((route) => {
        console.log(route.path);
        if (route.path === "/") {
            root = route;
        } else {
            const parent = routes
                .filter(
                    (r) =>
                        route.path.startsWith(r.path) && r.path !== route.path,
                )
                .pop();
            if (parent) {
                parent.children.push(route);
            }
        }
    });

    return root!;
}

function buildElementTree(route: Route): ReactElement {
    return (
        <FrameworkRoute
            key={route.path}
            path={route.path}
            element={<route.element />}
        >
            {route.children.map(buildElementTree)}
        </FrameworkRoute>
    );
}

export default (
    <Routes>{buildElementTree(buildRouteTree(importRoutes()))}</Routes>
);
