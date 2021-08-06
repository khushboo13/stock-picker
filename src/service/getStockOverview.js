import axios from 'axios';

export async function getStockOverview(symbol) {
    const {data: searchResults} = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=QW2ZZZG230KANVRQ`);
    return searchResults;
}