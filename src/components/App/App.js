import * as React from "react";
import { Navbar, Home, Docs, Contact, Footer } from "../Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route path="/docs">
            <Docs />
          </Route>
        </Switch>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}