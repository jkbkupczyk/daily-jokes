import ky from 'ky';

const fetchRandomJokeData = () => {
    return ky.get('https://api.github.com/users/jkbkupczyk').json();
};

export default fetchRandomJokeData;