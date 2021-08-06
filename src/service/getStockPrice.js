import axios from 'axios';

export async function getStockPrice(symbol, time) {
    const timeStr = `${time}min`
    const {data: searchResults} = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${timeStr}&apikey=QW2ZZZG230KANVRQ`);
    const latestPriceTs = Object.keys(searchResults[`Time Series (${timeStr})`])[0]
    return searchResults[`Time Series (${timeStr})`][latestPriceTs]['1. open'];
}