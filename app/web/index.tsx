import { Link } from "react-router-dom";

export default function () {
    return (
        <div>
            <div>Index</div>
            <div>
                <Link to="about">About</Link>
            </div>
        </div>
    );
}
