export default function ({ children }: { children?: React.ReactNode }) {
    return (
        <div>
            <div>Admin</div>
            {children}
        </div>
    );
}
