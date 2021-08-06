import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import Header from '../components/Header';
import StockOverview from '../components/StockOverview';
import { getStockOverview } from '../service/getStockOverview';
import { getStockPrice } from '../service/getStockPrice';
import StockPrice from '../components/StockPrice';

export default function StockDetails() {
    const [overview, setOverview] = useState({});
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState('');
    const [priceLoading, setPriceLoading] = useState(false);
    const {symbol} = useParams();

    useEffect(() => {
        if(symbol) {
            setLoading(true);
            getStockOverview(symbol)
                .then((result) => {
                    setLoading(false);
                    setOverview(result)
                });
            getStockPrice(symbol, '5')
                .then((result) => {
                    setPriceLoading(false);
                    setPrice(result)
                });
        }
    }, [symbol]);

    useEffect(() => {
        const timeoutId = setInterval(() => {
            setPriceLoading(true);
            getStockPrice(symbol, '5')
            .then((result) => {
                setPriceLoading(false);
                setPrice(result)
            });
        }, 60000)
        return () => clearInterval(timeoutId);
    }, [])

    const renderLoader = () => <Skeleton count={6} width={640} height={80} className="mb-5" />;
    const renderPriceLoader = () => <Skeleton count={1} width={640} height={80} className="mb-5" />;
    return (
        <div className="bg-gray-background">
            <Header />
            
            <div className="flex mx-auto max-w-screen-lg justify-between items-center w-full">
                <div className="container mx-auto h-full max-w-screen-lg">
                    {priceLoading ? renderPriceLoader() : <StockPrice price={price} currency={overview.Currency} />}
                    {loading ? renderLoader() : <StockOverview overview={overview}/>}
                </div>
            </div>
        </div>
    );
}
