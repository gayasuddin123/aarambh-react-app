import React, { useState, useEffect } from 'react';

const CountdownBanner = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const registrationStartTime = new Date("2024-02-12T08:00:00").getTime(); // Registration start time
    const now = new Date().getTime();
    let difference = registrationStartTime - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <div className="container mx-auto bg-slate-900 mt-2 ">
      <div className="flex justify-between items-center mx-10" >
        <div className='md:text-4xl text-white py-4 px-8 text-left'>
          <h1 className="text-lg md:text-xl">Registration Starts In:</h1>
        </div>
        <div className="flex">
          <div className="bg-slate-900 text-blue-500 font-bold text-xl md:text-2xl rounded-full px-6 py-4 mr-4">
            {timeRemaining.days} <span className="text-xs md:text-lg">Days</span>
          </div>
          <div className="bg-slate-900 text-blue-500 font-bold text-xl md:text-2xl rounded-full px-6 py-4 mr-4">
            {timeRemaining.hours} <span className="text-xs md:text-lg">Hours</span>
          </div>
          <div className="bg-slate-900 text-blue-500 font-bold text-xl md:text-2xl rounded-full px-6 py-4 mr-4">
            {timeRemaining.minutes} <span className="text-xs md:text-lg">Minutes</span>
          </div>
          <div className="bg-slate-900 text-blue-500 font-bold text-2xl md:text-2xl rounded-full px-6 py-4">
            {timeRemaining.seconds} <span className="text-xs md:text-lg">Seconds</span>
          </div>
        </div>
        <div className="flex items-center">
          {/* I have changed the button color to match the theme of the website and increased its size and border radius */}
          <a href="#" className="bg-slate-600 hover:bg-slate-300 text-gray-900 hover:text-gray-800 font-bold rounded-full px-8 py-4 mr-4">
            <p>Register</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
