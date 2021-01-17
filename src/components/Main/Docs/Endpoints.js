import React, { Component } from "react";
import "./Endpoints.css";

const endpoints = [
    { path: '/', desc: 'Get random joke' },
    { path: '/jokes', desc: 'Get all jokes' },
    { path: '/info', desc: 'Retrieve info about all jokes' }];

const queryParams = [
    { paramName: "type", desc: 'Get jokes specified by type ex. riddle' },
    { paramName: "lang", desc: 'Get jokes specified by lang ex. pl, de, es' }];

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
                    <p className="endpoint">
                        Base URL for all endpoints:
                        <a className="endpoint-link" href="https://daily-jokes.herokuapp.com/api" target="_blank" rel="noopener noreferrer">
                            https://daily-jokes.herokuapp.com/api
                        </a>
                    </p>

                    <header>
                        <h2>Endpoints</h2>
                    </header>
                    <div>
                        {
                            endpoints.map(endp => (
                                <p className="endpoint">
                                    <a className="endpoint-link" href={'api' + endp.path} target="_blank" rel="noopener noreferrer">
                                        {endp.path}
                                    </a>
                                    {endp.desc}
                                </p>
                            ))
                        }
                    </div>

                    <header>
                        <h3>Query Params</h3>
                    </header>
                    {
                        queryParams.map(param => (
                            <p className="endpoint" key={param.endp}>
                                <a className="endpoint-link" href="https://github.com/jkbkupczyk/jokes-api/blob/readme-doc/docs/ENDPOINTS.md" target="_blank" rel="noopener noreferrer">
                                    {param.paramName}
                                </a>
                                {param.desc}
                            </p>
                        ))
                    }

                    <header>
                        <h2>Models</h2>
                    </header>
                    {
                        models.map(model => (
                            <p className="endpoint" key={model.name.toLowerCase()}>
                                <a className="endpoint-link" target="_blank" rel="noopener noreferrer" href="https://github.com/jkbkupczyk/jokes-api/blob/master/README.md">
                                    {model.name}
                                </a>
                                {model.desc}
                            </p>
                        ))
                    }
                </div>
            </main >
        );
    }
}

export default Endpoints;