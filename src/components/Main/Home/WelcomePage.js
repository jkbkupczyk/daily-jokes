import React from "react";
import fetchRandomJokeData from "../../../Api/APIUtils";
import "./WelcomePage.css";

const { useState } = React;
const { useEffect } = React;

const WelcomePage = () => {
    const [randomJokeData, setRandomJokeData] = useState('');

    useEffect(() => {
        fetchRandomJokeData().then((data) => {
            setRandomJokeData(data);
        })
    }, [])

    return (
        <main className="welcome-page">
            <p>
                {randomJokeData.login}
            </p>
            <p>
                {randomJokeData.name}
            </p>
        </main>
    )
}

export default WelcomePage;