import axios from 'axios';

const endpoint = 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=36424a7cd2b14fd8b97d6b11b2a027cc&language=es&q=';
const endpointPopular = 'https://newsapi.org/v2/top-headlines?apiKey=31d4104a52ad4a5a8bcbd3148f5f46ea&category=general';

export const getNewsByTag = async (tag='facebook')=>{
    const rpta = await axios.get(endpoint + tag);
    return rpta;
}

export const getNewsPopular = async (tag='facebook')=>{
    const rpta = await axios.get(endpointPopular);
    return rpta;
}