interface Head {
    children: React.ReactNode;
}

export function Head({ children }: Head) {
    return (
        <head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            <script type="module" src="/@vite/client" />
            {children}
        </head>
    );
}
