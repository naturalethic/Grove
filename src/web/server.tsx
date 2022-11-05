import Html from "/app/web/root";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

export function render(url: string) {
    return renderToPipeableStream(
        <html>
            <StaticRouter location={url}>
                <Html />
            </StaticRouter>
        </html>,
    );
}
