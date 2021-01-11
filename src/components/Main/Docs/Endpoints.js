import React, { Component } from "react";
import "./Endpoints.css";

const endpoints = [
    { path: '/', desc: 'Get random joke' },
    { path: '/jokes', desc: 'Get all jokes' },
    { path: '/info', desc: 'Retrieve info about all jokes' }];

const models = [
    { name: 'Joke', desc: 'Represent a single joke' }];

class Endpoints extends Component {
    render() {
        return (
            <main className="docs-content">
                <div className="doc-endpoints">
                    <header>
                        <h1>API Documentation</h1>
                    </header>
                    <p className="endpoint">Base URL for all endpoints: <code>https://daily-jokes.herokuapp.com/api</code></p>

                    <h2>Endpoints</h2>
                    {
                        endpoints.map(endp => (
                            <p className="endpoint"><code>{endp.path}</code> {endp.desc}</p>
                        ))
                    }

                    <h2>Models</h2>
                    {
                        models.map(model => (
                            <p className="endpoint"> <code>{model.name}</code> { model.desc}</p>
                        ))
                    }
                </div>
            </main >
        );
    }
}

export default Endpoints;