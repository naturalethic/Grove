import About from "/app/web/about";
import Head from "/app/web/head";
import Index from "/app/web/index";
import { Suspense } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

export function render(url: string) {
    return renderToPipeableStream(
        <html>
            <Head />
            <body>
                <StaticRouter location={url}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </Suspense>
                </StaticRouter>
            </body>
            <script type="module" src="/src/web/client.tsx" />
        </html>,
    );
}
