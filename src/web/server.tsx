import { renderToPipeableStream } from "react-dom/server";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import Html from "./html";
import routes from "./routes";

export async function render(url: string) {
    return renderToPipeableStream(
        <Html>
            <StaticRouter location={url}>
                <Routes>
                    {Object.entries(routes).map(([path, Element]) => (
                        <Route key={path} path={path} element={<Element />} />
                    ))}
                </Routes>
            </StaticRouter>
        </Html>,
    );
}
