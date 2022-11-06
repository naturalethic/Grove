import { createElement, lazy, Suspense } from "react";

export default function walk(url: string): any;
export default function walk(tree: string[], index: number): any;
export default function walk(
    url_or_tree: string | string[],
    index: number = 0,
): any {
    if (typeof url_or_tree === "string") {
        const url = url_or_tree as string;
        const tree = url.split("/").filter(Boolean);
        return walk([""].concat(tree), 0);
    }
    const tree = url_or_tree as string[];
    const path = tree
        .slice(0, index + 1)
        .join("/")
        .substring(1);
    const Component = path
        ? lazy(() => import(`../../app/web/${path}/index.tsx`))
        : lazy(() => import("../../app/web/index"));
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
