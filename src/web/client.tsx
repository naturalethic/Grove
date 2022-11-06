import { lazy, LazyExoticComponent } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Html from "./html";
import routes from "./routes";

hydrateRoot(
    document,
    <Html>
        <BrowserRouter>
            <Routes>
                {Object.entries(routes).map(([path, Element]) => (
                    <Route key={path} path={path} element={<Element />} />
                ))}
            </Routes>
        </BrowserRouter>
    </Html>,
);
