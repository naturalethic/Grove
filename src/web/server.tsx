import Html from "/app/web/html";
import { renderToPipeableStream } from "react-dom/server";
import walk from "./walk";

export async function render(url: string) {
    const content = walk(url.split("/"));
    return renderToPipeableStream(<Html>{content}</Html>);
}
