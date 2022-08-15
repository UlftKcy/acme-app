import React, { useEffect, useRef, useState } from "react";
import "./BitcoinPrice.css";
import { options } from "../../constants/index";
import apiClient from "../../api/Bitcoin";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

const BitcoinPrice = () => {
  const [btcPrice, setBtcPrice] = useState(0.0);
  const currencyRef = useRef(options[0].value);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const request = setInterval(
      async () => await fetchBitcoinPrice(currencyRef.current.value),
      3000
    );
    return () => clearInterval(request);
  }, []);

  const fetchBitcoinPrice = async (currency) => {
    setIsLoading(true);
    try {
      const { data } = await apiClient.get();
      if (currency === "USD") {
        setIsLoading(false);
        setBtcPrice(data.bpi.USD.rate);
      } else if (currency === "GBP") {
        setIsLoading(false);
        setBtcPrice(data.bpi.GBP.rate);
      } else {
        setIsLoading(false);
        setBtcPrice(data.bpi.EUR.rate);
      }
    } catch (error) {
      setIsLoading(false);
      throw new Error("Something went wrong!", { cause: error });
    }
  };
  const handleCurrency = () => {
    const currencyValue = currencyRef.current.value;
    fetchBitcoinPrice(currencyValue);
  };

  return (
    <div className="container">
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
            {React.Children.toArray(options.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))
            )};
          </select>
        </div>
        <div className="bitcoin-price-wrapper">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <span className="bitcoin-price">$ {btcPrice}</span>
          )}
        </div>
      </div>
    </div>

  );
};

export default BitcoinPrice;
