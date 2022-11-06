export default function ({ children }: { children?: React.ReactNode }) {
    return (
        <div>
            <div>Users</div>
            {children}
        </div>
    );
}
