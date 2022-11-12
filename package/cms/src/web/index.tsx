import { Link, Outlet, useLoaderData } from "react-router-dom";

const routes = Object.entries(import.meta.glob("/src/web/**/[a-z]*.tsx")).map(
    ([path]) => {
        console.log(path);
        const [_, name] = path.match(/\/src\/web\/(.*)\.tsx/) ?? [];
        return name.replace(/(\/)?index$/, "");
    },
);

routes.unshift("/");

export const loader = async () => {
    return { foo: "bar" };
};

export default function ({ children }: { children?: React.ReactNode }) {
    const data = useLoaderData();
    return (
        <div>
            <div>Index: {data.foo}</div>
            {routes.map((path) => (
                <div key={path}>
                    <Link to={path}>{path}</Link>
                </div>
            ))}
            <hr />
            <Outlet />
        </div>
    );
}
