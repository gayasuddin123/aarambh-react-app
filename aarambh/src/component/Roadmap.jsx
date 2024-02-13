import React from 'react';

function Banner() {
  return (
    <div className='flex justify-center mx-16'>
    <div className="bg-gray-150">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-8">RoadMap for Developing into Professional</h2>
      <img src="Month 6.png" alt="Banner" className="rounded-lg shadow-lg mt-2 mb-6" />
      </div>
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
