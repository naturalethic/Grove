import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Html from "./html";
import { ClientRouter } from "./router";

hydrateRoot(
    document,
    <Html>
        <ClientRouter />
    </Html>,
);
