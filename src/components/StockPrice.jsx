import React from 'react';

export default function StockPrice({ price, currency }) {

    return <p className="border-2 mb-4 rounded-lg bg-white p-3 border-gray-primary mt-4">Current Price: {price} {currency}</p>
}
