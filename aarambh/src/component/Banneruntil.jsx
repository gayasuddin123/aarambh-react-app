import React, { useState, useEffect } from 'react';

const CountdownBanner = () => {
  const [countdown, setCountdown] = useState('');

  // Function to calculate countdown
  const calculateCountdown = () => {
    // Set the countdown date (replace with your desired date)
    const countDownDate = new Date('Feb 14, 2024 12:00:00').getTime();

    // Update the countdown every 1 second
    const x = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the remaining time
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(x);
        setCountdown('Registration Closed');
      }
    }, 1000);
  };

  // Call calculateCountdown function on component mount
  useEffect(() => {
    calculateCountdown();
  }, []);

  return (
    <div className=' mr-6 ml-6'>
    <div className="bg-slate-300 text-gray-800 px-8 py-4 mt-6 ml-10 mr-10 flex justify-between items-center rounded-full">
      <div className="text-lg">
        Registration Starts in: <span className="font-bold text-blue-500">{countdown}</span>
      </div>
      <button className="bg-slate-400 text-white-800 px-5 py-1 shadow hover:bg-slate-500 rounded-full ">
        Register Now
      </button>
    </div>
    </div>
  );
};

export default CountdownBanner;
