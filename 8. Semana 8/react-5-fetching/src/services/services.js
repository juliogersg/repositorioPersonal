import axios from 'axios';

const endpoint = 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=36424a7cd2b14fd8b97d6b11b2a027cc&language=es&q=';

export const getNewsByTag = async (tag='facebook')=>{
    const rpta = await axios.get(endpoint + tag);
    return rpta;
}
