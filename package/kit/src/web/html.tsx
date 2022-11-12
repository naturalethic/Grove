import { Suspense } from "react";

export function Html({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Tangerine: Kit</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="module"
                    dangerouslySetInnerHTML={{
                        __html: `
                            import RefreshRuntime from "/@react-refresh"
                            RefreshRuntime.injectIntoGlobalHook(window)
                            window.$RefreshReg$ = () => {}
                            window.$RefreshSig$ = () => (type) => type
                            window.__vite_plugin_react_preamble_installed__ = true
                            `,
                    }}
                />
                <script type="module" src="/@vite/client" />
                <script type="module" src="/src/client.tsx" />
            </head>
            <body>
                <Suspense>{children}</Suspense>
            </body>
        </html>
    );
}
