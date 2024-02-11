import React from 'react';

function Banner() {
  return (
    <div className="bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8"> RoadMap for Developing into Professional</h2>
      <img src="Month 1.png" alt="Banner" className="rounded-lg shadow-lg" />
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
