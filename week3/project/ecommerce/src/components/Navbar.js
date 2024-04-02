import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <ul className="navbar-nav-custom">
                <li className="nav-item-custom">
                    <Link to="/" className="nav-link-custom">Products</Link>
                </li>
                <li className="nav-item-custom">
                    <Link to="/favorites" className="nav-link-custom">Favorite</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;


