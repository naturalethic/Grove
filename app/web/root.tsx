import { Body, Head } from "@grove/web";
import { Link, Route, Routes } from "react-router-dom";

export default function () {
    return (
        <>
            <Head>
                <title>Grove</title>
            </Head>
            <Body>
                <Link to="/about">About</Link>
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/about" element={<div>About</div>} />
                </Routes>
            </Body>
        </>
    );
}
