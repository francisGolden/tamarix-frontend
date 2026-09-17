import { Link } from "@tanstack/react-router";

export const Nav = () => {
    return (
        <nav>
            <Link to="/" activeOptions={{ exact: true }}>
                Home
            </Link>{" "}
            <Link to="/about">About</Link>
            <Link to="/garden">My Garden</Link>
        </nav>
    );
};
