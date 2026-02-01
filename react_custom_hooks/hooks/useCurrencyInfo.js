import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

    // Api Response: 
    /* 
        {
            "date": "2025-01-12",
            "usd": {
                "1inch": 2.57155151,
                "aave": 0.0034756941,
                "ada": 0.96893972,
                "aed": 3.6725,
                "afn": 72.3313105,
                "agix": 1.73212692,
                "akt": 0.32505883,
                "algo": 2.65874095,
                "all": 95.63082689,
            }    
        }
    */

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));

        console.log(data);

    }, [currency]);

    return data;

}

export default useCurrencyInfo;