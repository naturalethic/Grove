import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Html from "./html";
import routes from "./routes";

hydrateRoot(
    document,
    <Html>
        <BrowserRouter>{routes}</BrowserRouter>
    </Html>,
);
