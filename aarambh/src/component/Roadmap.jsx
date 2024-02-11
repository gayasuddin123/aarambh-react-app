import React from 'react';

function Banner() {
  return (
    <div className='flex justify-center'>
    <div className="bg-gray-100 max-w-7xl sm:px-6 lg:px-8 mt-10 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mt-16 p-8">RoadMap for Developing into Professional</h2>
      <img src="Month 6.png" alt="Banner" className="rounded-lg shadow-lg mx-auto m-8 p-8" />
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
