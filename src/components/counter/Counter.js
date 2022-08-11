import React from 'react';
import "./Counter.css";

const Counter = () => {
  return (
    <div className='counter-wrapper'>
      <div className='counter-item'>
        <button className='btn'><i className="fa-solid fa-arrow-up"></i></button>
        <span className='counter-value'>10</span>
        <button className='btn'><i className="fa-solid fa-arrow-down"></i></button>
      </div>
      <span className='colon-icon'>:</span>
      <div className='counter-item'>
        <button className='btn'><i className="fa-solid fa-arrow-up"></i></button>
        <span className='counter-value'>00</span>
        <button className='btn'><i className="fa-solid fa-arrow-down"></i></button>
      </div>
      <span className='colon-icon'>:</span>
      <div className='counter-item'>
        <button className='btn'><i className="fa-solid fa-arrow-up"></i></button>
        <span className='counter-value'>00</span>
        <button className='btn'><i className="fa-solid fa-arrow-down"></i></button>
      </div>
    </div>
  )
}

export default Counter