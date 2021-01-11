import React, { Component } from "react";
import Endpoints from "./Endpoints";
import "./Docs.css";

class Docs extends Component {
    render() {
        return (
            <section className="docs">
                <header className="docs-header">
                    <h1>daily-jokes</h1>
                    <h2>Get your daily dose of Jokes 🃏</h2>
                    <a href="https://github.com/jkbkupczyk/jokes-api" target="_blank" rel="noopener, noreferrer">View on GitHub</a>
                </header>

                <Endpoints />
            </section>
        );
    }
}

export default Docs;