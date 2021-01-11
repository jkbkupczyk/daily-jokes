import React from "react";
import fetchRandomJokeData from "../../../Api/APIUtils";

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
        <div>
            <p>
                {randomJokeData.login}
            </p>
            <p>
                {randomJokeData.name}
            </p>
        </div>
    )
}

export default WelcomePage;