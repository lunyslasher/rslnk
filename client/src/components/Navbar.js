import React from "react";

export const Navbar = () => {
    return (
        <nav>
            <div
                class="nav-wrapper deep-purple darken-2"
                style={{ padding: `0 2rem` }}
            >
                <span
                    class="brand-logo"
                    style={{ fontFamily: `Lato`, fontWeight: 700 }}
                >
                    looney
                </span>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a href="/discord">Discord Server</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
