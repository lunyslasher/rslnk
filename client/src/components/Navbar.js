import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper blue darken-1" style={{ padding: `0 2rem` }}>
                <span class="brand-logo" style={{ fontFamily: `Lato`, fontWeight: 700 }}>
                    looney
                </span>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/settings">R6 Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
