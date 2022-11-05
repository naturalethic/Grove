import { build } from "esbuild";
import express from "express";
import { createServer } from "vite";

export default async function () {
    const app = express();
    const vite = await createServer({
        server: { middlewareMode: true },
        appType: "custom",
    });
    vite.middlewares.use(async (request, response, next) => {
        if (request.url === "/client") {
            const result = await build({
                entryPoints: ["src/web/client.tsx"],
                bundle: true,
                write: false,
            });
            response.setHeader("Content-Type", "application/javascript");
            response.end(result.outputFiles?.[0].text);
        } else {
            next();
        }
    });
    app.use(vite.middlewares);
    app.use("*", async (req, res, next) => {
        const url = req.originalUrl;
        try {
            const { render } = await vite.ssrLoadModule("/src/web/server.tsx");
            const html = await render(url);
            html.pipe(res);
        } catch (error) {
            vite.ssrFixStacktrace(error as Error);
            next(error);
        }
    });
    console.log("Server running at http://localhost:7777");
    app.listen(7777);
}