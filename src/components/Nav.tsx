import { Link } from "@tanstack/react-router";

export const Nav = () => {
    return (
        <div id="nav-container">
            <span>Tamarix</span>
            <nav>
                <Link to="/" activeOptions={{ exact: true }}>
                    Home
                </Link>{" "}
                <Link to="/about">About</Link>
                <Link to="/garden">My Garden</Link>
            </nav>
        </div>
    );
};
