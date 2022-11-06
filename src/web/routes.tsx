import { lazy, LazyExoticComponent } from "react";

const routes = Object.entries(
    import.meta.glob("/app/web/**/[a-z[]*.tsx"),
).reduce((acc, [path, load]) => {
    const [_, name] = path.match(/\/app\/web\/(.*)\.tsx/) ?? [];
    acc[`/${name.replace(/(\/)?index$/, "")}`] = lazy(
        load as () => Promise<{ default: any }>,
    );
    return acc;
}, {} as Record<string, LazyExoticComponent<any>>);

export default routes;
