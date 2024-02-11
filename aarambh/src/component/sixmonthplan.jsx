import React from 'react';

function Banner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <h2 className="text-xl lg:text-4xl leading-10 font-extrabold text-center text-gray-800 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl mb-10">
        6 Month RoadMap for Developing into Professional
      </h2>
      <img src="Month 6.png" alt="Banner" className="rounded-lg shadow-lg" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Banner />
    </div>
  );
}

export default App;
