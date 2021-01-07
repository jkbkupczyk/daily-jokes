import * as React from "react";
import '../../styles/styles.css';
import fetchRandomJokeData from "../../Api/APIUtils";
import '../Main/Navbar';
import '../Main/Footer';
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";

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
      <Navbar></Navbar>
      {
        <div>
          <img src={randomJokeData.avatar_url} alt={randomJokeData.name} />
          <p>{randomJokeData.name}</p>
        </div>
      }
      <Footer></Footer>
    </div>
  );
}