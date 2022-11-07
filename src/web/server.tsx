import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Html from "./html";
import routes from "./routes";

export async function render(url: string) {
    return renderToPipeableStream(
        <Html>
            <StaticRouter location={url}>{routes}</StaticRouter>
        </Html>,
    );
}
