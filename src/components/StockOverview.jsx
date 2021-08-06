import React from 'react';

export default function StockOverview({overview}) {

    const renderOverview = () => (
        <>
            { Object.keys(overview).length > 0 ? 
                (
                    <div>
                        <p className="border-2 mb-4 rounded-lg bg-white p-3 border-gray-primary mt-4">Name: {overview.Name}</p>
                        <p className="border-2 mb-4 rounded-lg bg-white p-3 border-gray-primary mt-4">Symbol: {overview.Symbol}</p>
                        <p className="border-2 mb-4 rounded-lg bg-white p-3 border-gray-primary mt-4 max-h-16 overflow-scroll">Description: {overview.Description}</p>
                        <p className="border-2 mb-4 rounded-lg bg-white p-3 border-gray-primary mt-4">Market Capitalization: {overview.MarketCapitalization}</p>
                        <p className="border-2 mb-4 rounded-lg bg-white p-3 border-gray-primary mt-4">PE Ratio : {overview.PERatio}</p>
                        <p className="border-2 mb-4 rounded-lg bg-white p-3 border-gray-primary mt-4">Industry: {overview.Industry}</p>
                    </div>
                ) : 
                'No data available for this symbol'
            }
        </>
    )

    return renderOverview();
}
