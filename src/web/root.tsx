import { Outlet, ReactLocation } from "@tanstack/react-location";
import { StrictMode } from "react";
import Html from "./html";
import Router from "./router";

export default function ({ location }: { location?: ReactLocation }) {
    return (
        <StrictMode>
            <Router location={location}>
                <Html>
                    <Outlet />
                </Html>
            </Router>
        </StrictMode>
    );
}
