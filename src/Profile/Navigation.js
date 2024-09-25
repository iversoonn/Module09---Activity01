import React from "react";
import './Navigation.css'; // Import the CSS file for styling

function Navigation() {
    return (
        <nav className="mang-inasal-nav">
            <ul className="nav-list">
                <li className="nav-item">Profile</li>
                <li className="nav-item">Settings</li>
                <li className="nav-item">Logout</li>
            </ul>
        </nav>
    );
}

export default Navigation;
