import { ReactLocation, Route, Router } from "@tanstack/react-location";

function importRoutes(): Route[] {
    const routes = Object.entries(
        import.meta.glob("/app/web/**/[a-z[]*.tsx"),
    ).map(([path, element]) => {
        const [_, name] = path.match(/\/app\/web\/(.*)\.tsx/) ?? [];
        path = `/${name.replace(/(\/)?index$/, "")}`;
        return {
            path,
            element: () => element().then((mod: any) => <mod.default />),
            children: [],
            loader: (...args: any[]) =>
                element().then((mod: any) => mod?.loader?.(...args)),
        };
    });

    routes.sort((a: Route, b: Route) => a.path!.localeCompare(b.path!));
    return routes;
}

function buildRouteTree(routes: Route[]): Route {
    let root: Route;

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

    routes.forEach((route) => {
        if (route.path === "/") {
            return;
        }
        route.path = route.path!.split("/").pop();
    });

    return root!;
}

export default function ({ children, location = new ReactLocation() }: {
    children?: React.ReactNode;
    location?: ReactLocation;
}) {
    return (
        <Router location={location} routes={[buildRouteTree(importRoutes())]}>
            {children}
        </Router>
    );
}
