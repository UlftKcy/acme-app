import React, { useEffect, useRef, useState } from "react";
import "./BitcoinPrice.css";
import { options } from "../../constants/index";
import apiClient from "../../api/Bitcoin";

const BitcoinPrice = () => {
  const [btcPrice, setBtcPrice] = useState(0.0);
  /* const [priceLastUpdated, setPriceLastUpdated] = useState(null); */
  const currencyRef = useRef(options[0].value);

  useEffect(() => {
    const request = setInterval(async () => await fetchBitcoinPrice(currencyRef.current.value), 3000);
    return () => clearInterval(request);
  }, []);

  const fetchBitcoinPrice = async (currency) => {
    try {
      const { data } = await apiClient.get();
      if(currency === "USD"){
        setBtcPrice(data.bpi.USD.rate);
      }else if(currency === "GBP"){
        setBtcPrice(data.bpi.GBP.rate);
      }else {
        setBtcPrice(data.bpi.EUR.rate);
      }
      
      /* setPriceLastUpdated(data.time.updated); */
    } catch (error) {
      throw new Error("Something went wrong!", { cause: error });
    }
  };
  const handleCurrency = ()=>{
    const currencyValue = currencyRef.current.value;
    fetchBitcoinPrice(currencyValue);
  }

  return (
    <div className="bitcoin-wrapper">
      <div className="bitcoin-header">
        <span>Bitcoin</span>
        <select
          name="bitcoin_currency"
          id="bitcoin_currency"
          className="bitcoin-currency-selection"
          ref={currencyRef}
          onChange={handleCurrency}
        >
          {React.Children.toArray(
            options.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))
          )}
          ;
        </select>
      </div>
      <div className="bitcoin-price-wrapper">
        <span className="bitcoin-currency">$</span>
        <span className="bitcoin-price">{btcPrice}</span>
      </div>
    </div>
  );
};

export default BitcoinPrice;
