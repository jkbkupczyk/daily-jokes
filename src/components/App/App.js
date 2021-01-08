import * as React from "react";
import '../../styles/styles.css';
import fetchRandomJokeData from "../../Api/APIUtils";
import { Navbar, Home, Docs, Contact, Footer } from "../Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const { useState } = React;
const { useEffect } = React;

export default function App() {
  const [randomJokeData, setRandomJokeData] = useState('');

  useEffect(() => {
    fetchRandomJokeData().then((data) => {
      setRandomJokeData(data)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route path="/Docs">
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