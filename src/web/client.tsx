import Head from "/app/web/head";
import { lazy, Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = lazy(() => import("/app/web/index"));

const About = lazy(() => {
    console.log("Imporrting ABout");
    return import("/app/web/about");
});

hydrateRoot(
    document.documentElement,
    <>
        <Head />
        <body>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </body>
    </>,
);
