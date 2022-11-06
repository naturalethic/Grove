import { Link } from "react-router-dom";

const routes = Object.entries(import.meta.glob("/app/web/**/[a-z[]*.tsx")).map(
    ([path]) => {
        const [_, name] = path.match(/\/app\/web\/(.*)\.tsx/) ?? [];
        return name.replace(/(\/)?index$/, "");
    },
);

export default function ({ children }: { children?: React.ReactNode }) {
    return (
        <div>
            <div>Index</div>
            {routes.map((path) => (
                <div key={path}>
                    <Link to={path}>{path}</Link>
                </div>
            ))}
            <hr />
            {children}
        </div>
    );
}
