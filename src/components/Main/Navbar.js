import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const navs = [
    { path: '/', name: 'Home' },
    { path: '/docs', name: 'Docs' },
    { path: '/contact', name: 'Contact' }];

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div>
                    <ul>
                        {navs.map(nav => (
                            <li key={nav.name.toLowerCase()}>
                                <NavLink to={nav.path}>{nav.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default (Navbar);