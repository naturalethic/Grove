import { lazy, ReactElement } from "react";
import {
    createBrowserRouter,
    Route,
    RouteObject,
    RouterProvider,
    Routes,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

function importRoutes(): RouteObject[] {
    const routes = Object.entries(
        import.meta.glob("/src/web/**/[a-z[]*.tsx"),
    ).map(([path, element]) => {
        console.log(path);
        const [_, name] = path.match(/\/src\/web\/(.*)\.tsx/) ?? [];
        path = `/${name.replace(/(\/)?index$/, "")}`;
        const Element = lazy(element as () => Promise<{ default: any }>);
        return {
            path,
            element: <Element />,
            children: [],
            loader: (...args: any[]) =>
                element().then((mod: any) => mod?.loader?.(...args)),
        };
    });

    routes.sort((a: RouteObject, b: RouteObject) =>
        a.path!.localeCompare(b.path!),
    );
    return routes;
}

function buildRouteTree(routes: RouteObject[]): RouteObject {
    let root: RouteObject;

    routes.forEach((route) => {
        if (route.path === "/") {
            root = route;
        } else {
            const parent = routes
                .filter(
                    (r) =>
                        route.path!.startsWith(r.path!) &&
                        r.path !== route.path,
                )
                .pop();
            if (parent) {
                parent.children!.push(route);
            }
        }
    });

    return root!;
}

function buildElementTree(route: RouteObject): ReactElement {
    return (
        <Route key={route.path} path={route.path} element={route.element}>
            {route.children!.map(buildElementTree)}
        </Route>
    );
}

export function ClientRouter() {
    return (
        <RouterProvider
            router={createBrowserRouter([buildRouteTree(importRoutes())])}
        />
    );
}

export function ServerRouter({ url }: { url: string }) {
    return (
        <StaticRouter location={url}>
            <Routes>{buildElementTree(buildRouteTree(importRoutes()))}</Routes>
        </StaticRouter>
    );
}
