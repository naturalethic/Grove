interface Body {
    children?: React.ReactNode;
}

export function Body({ children }: Body) {
    return (
        <body>
            {children}
            <script src="/client" />
        </body>
    );
}
