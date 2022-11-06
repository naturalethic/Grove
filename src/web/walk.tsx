import { createElement, lazy, Suspense } from "react";

export default function walk(tree: string[], index = 0): any {
    const path = tree
        .slice(0, index + 1)
        .join("/")
        .substring(1);
    const Component = path
        ? lazy(() => import(`../../app/web/${path}/index.tsx`))
        : lazy(() => import("../../app/web"));
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
