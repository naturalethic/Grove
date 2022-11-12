import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function ({ children }: { children?: React.ReactNode }) {
	return (
		<div>
			<div>Admin</div>
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	);
}
