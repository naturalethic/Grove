import { Outlet } from "@tanstack/react-location";

export default function ({ children }: { children?: React.ReactNode }) {
    return (
        <div>
            <div>Admin</div>
            <Outlet />
        </div>
    );
}
