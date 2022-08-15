import React, { useEffect, useState } from 'react';
import "./Counter.css";

const Counter = () => {
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const incrementHours = () => {
    return hours >= 10 ? 10 : setHours(prevState => prevState + 1);
  }
  const decrementHours = () => {
    return hours > 0 ? setHours(prevState => prevState - 1) : 0;
  }

  const incrementMinutes = () => {
    return minutes < 59 ? setMinutes(prevState => prevState + 1) : 59;
  }
  const decrementMinutes = () => {
    return minutes > 0 ? setMinutes(prevState => prevState - 1) : 0;
  }

  const incrementSeconds = () => {
    return seconds < 59 ? setSeconds(prevState => prevState + 1) : 59;
  }
  const decrementSeconds = () => {
    return seconds > 0 ? setSeconds(prevState => prevState - 1) : 0;
  }

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes === 0) {
          setSeconds(59);
          setMinutes(59);
          return hours > 0 ? setHours(hours - 1) : setHours(9);
        } else {
          let seconds = 59;
          setSeconds(seconds);
          setMinutes(prevState => prevState - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const currentHours = hours < 10 ? `0${hours}` : hours;
  const currentMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;


  return (
    <div className='counter-wrapper'>
      <div className='counter-item'>
        <button className='btn' onClick={incrementHours}><i className="fa-solid fa-arrow-up"></i></button>
        <span className='counter-value'>{currentHours}</span>
        <button className='btn' onClick={decrementHours}><i className="fa-solid fa-arrow-down"></i></button>
      </div>
      <span className='colon-icon'>:</span>
      <div className='counter-item'>

        <button className='btn' onClick={incrementMinutes}><i className="fa-solid fa-arrow-up"></i></button>
        <span className='counter-value'>{currentMinutes}</span>
        <button className='btn' onClick={decrementMinutes}><i className="fa-solid fa-arrow-down"></i></button>
      </div>
      <span className='colon-icon'>:</span>
      <div className='counter-item'>
        <button className='btn' onClick={incrementSeconds}><i className="fa-solid fa-arrow-up"></i></button>
        <span className='counter-value'>{currentSeconds}</span>
        <button className='btn' onClick={decrementSeconds}><i className="fa-solid fa-arrow-down"></i></button>
      </div>
    </div>
  )
}

export default Counter;