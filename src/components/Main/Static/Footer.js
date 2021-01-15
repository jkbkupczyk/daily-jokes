import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-content">
                <p>Created with love ❤ by &copy;
                    <a href="https://github.com/jkbkupczyk" target="_blank" rel="noopener, noreferrer"> Jakub Kupczyk</a>
                </p>
            </footer>
        );
    }
}

export default Footer;