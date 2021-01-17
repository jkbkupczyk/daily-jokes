import ky from 'ky';

const fetchRandomJokeData = () => {
    return ky.get('https://daily-jokes.herokuapp.com/api').json();
};

export default fetchRandomJokeData;