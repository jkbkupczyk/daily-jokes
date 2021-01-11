import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navs = [
    { path: '/', name: 'Home' },
    { path: '/docs', name: 'Docs' },
    { path: '/contact', name: 'Contact' }];

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <h4>Daily Jokes</h4>
                </div>
                <ul className="nav-links">
                    {navs.map(nav => (
                        <li key={nav.name.toLowerCase()}>
                            <NavLink exact to={nav.path}>{nav.name}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className="burger">
                        <div className="lin1"></div>
                        <div className="line2"></div>
                        <div className="line2"></div>
                </div>
            </nav>
        );
    }
}

export default Navbar;