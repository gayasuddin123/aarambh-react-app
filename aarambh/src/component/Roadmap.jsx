import React from 'react';

function Banner() {
  return (
    <div className='flex justify-center'>
    <div className="bg-gray-150 ml-10 mr-10 mt-4 mb-2 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 mt-8 p-8">RoadMap for Developing into Professional</h2>
      <img src="Month 6.png" alt="Banner" className="rounded-lg shadow-lg mt-2" />
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
