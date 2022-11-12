import { ClientRouter, Html } from "@tangerine/kit";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(
    document,
    <Html>
        <ClientRouter />
    </Html>,
);
