import { Outlet } from "react-router-dom";

export default function ({ children }: { children?: React.ReactNode }) {
    return (
        <div>
            <div>Admin</div>
            <Outlet />
        </div>
    );
}
