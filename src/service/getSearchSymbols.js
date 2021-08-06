import axios from 'axios';

export async function getSearchSymbols(symbol) {
    const {data: searchResults} = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=QW2ZZZG230KANVRQ`);
    return searchResults;
}