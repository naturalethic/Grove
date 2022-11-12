import "./index.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";

// export const loader = async () => {
//     return { foo: "bar" };
// };

export default function () {
    // const data = useLoaderData();
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-zinc-700">
            <div className="text-orange-600 text-6xl font-sacramento mb-10">
                Tangerine
            </div>
            {/* <Outlet /> */}
        </div>
    );
}
