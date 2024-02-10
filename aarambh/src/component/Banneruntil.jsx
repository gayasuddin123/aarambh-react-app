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
    <div className="bg-slate-900 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-lg md:text-xl">Registration Starts In:</p>
        <div className="flex justify-center mt-2">
          <div className="bg-white text-blue-500 font-bold text-2xl md:text-4xl rounded-full px-4 py-2 mr-2">
            {timeRemaining.days} <span className="text-xs md:text-lg">Days</span>
          </div>
          <div className="bg-white text-blue-500 font-bold text-2xl md:text-4xl rounded-full px-4 py-2 mr-2">
            {timeRemaining.hours} <span className="text-xs md:text-lg">Hours</span>
          </div>
          <div className="bg-white text-blue-500 font-bold text-2xl md:text-4xl rounded-full px-4 py-2 mr-2">
            {timeRemaining.minutes} <span className="text-xs md:text-lg">Minutes</span>
          </div>
          <div className="bg-white text-blue-500 font-bold text-2xl md:text-4xl rounded-full px-4 py-2">
            {timeRemaining.seconds} <span className="text-xs md:text-lg">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
