import { hydrateRoot } from "react-dom/client";
import { Html } from "./html";
import { ClientRouter } from "./router";

hydrateRoot(
    document,
    <Html>
        <ClientRouter />
    </Html>,
);
