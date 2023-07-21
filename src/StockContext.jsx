import { useContext,createContext,useState } from "react";
export const StockContext = createContext()
export function useStockContext(){
    return useContext(StockContext)
}
export function StockProvider(props) {
    const [stocks,setStocks] = useState([]);
    const [myStocks, setMyStocks] = useState([])

    async function getStocks (){
        const apiKey = import.meta.env.VITE_API_KEY;
        const api =`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`
        const response = await fetch(api);
        const data = await response.json();
        setStocks(data)
    }
    const sharedValue = {
    stocks,
    myStocks,
    setMyStocks,
    getStocks
    }

    return (
        <StockContext.Provider value={sharedValue}>
            {props.children}
        </StockContext.Provider>
    )
}