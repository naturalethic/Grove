import { lazy, Suspense } from "react";

export default function walk(tree: string[], index = 0) {
    const path = `../../app/web${tree.slice(0, index + 1).join("/")}/index.tsx`;
    const Component = lazy(() => import(path));
    if (index === tree.length - 1) {
        return <Component />;
    }
    const content = walk(tree, index + 1);
    return (
        <Component>
            <Suspense>{content}</Suspense>
        </Component>
    );
}
