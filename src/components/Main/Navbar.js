import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const navs = [
    { path: '/', name: 'Home' },
    { path: 'docs', name: 'Docs' },
    { path: '/contact', name: 'Contact' }];

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    {navs.map(nav => (
                        <li key={nav.name.toLowerCase()}>
                            <NavLink exact to={nav.path}>{nav.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navbar;