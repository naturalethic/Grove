import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Html from "./html";
import { ServerRouter } from "./router";

export async function render(url: string) {
    return renderToPipeableStream(
        <Html>{/* <ServerRouter url={url} /> */}</Html>,
    );
}
