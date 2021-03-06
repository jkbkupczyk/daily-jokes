import React, { Component } from "react";
import Endpoints from "./Endpoints";
import "./Docs.css";

class Docs extends Component {
    render() {
        return (
            <section className="docs">
                <header className="docs-header">
                    <h1>daily-jokes</h1>
                    <a href="https://github.com/jkbkupczyk/jokes-api" target="_blank" rel="noopener noreferrer" className="gh-bttn">View on GitHub</a>
                    <h2>Get your daily dose of Jokes <span className="joke">🃏</span></h2>
                </header>

                <Endpoints />
            </section>
        );
    }
}

export default Docs;