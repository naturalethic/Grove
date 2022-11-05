import Html from "/app/web/root";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
    document.documentElement,
    <BrowserRouter>
        <Html />
    </BrowserRouter>,
);
