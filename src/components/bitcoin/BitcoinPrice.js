import React from 'react';
import "./BitcoinPrice.css";

const BitcoinPrice = () => {
  const options = [
    {
      label: "USD",
      value: "usd",
    },
    {
      label: "GBP",
      value: "gbp",
    },
    {
      label: "EUR",
      value: "eur",
    },
  ];
  return (
    <div className='bitcoin-wrapper'>
      <div className="bitcoin-header">
        <span>Bitcoin</span>
        <select name="bitcoin_currency" id="bitcoin_currency" className='bitcoin-currency-selection'>
          {options.map(option=>(
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className='bitcoin-price-wrapper'>
        <span className='bitcoin-currency'>$</span>
        <span className='bitcoin-price'>23,000.00</span>
      </div>
    </div>
  )
}

export default BitcoinPrice