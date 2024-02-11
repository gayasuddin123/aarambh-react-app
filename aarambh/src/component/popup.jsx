import React, { useState } from 'react';

const PopupMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <div className="relative">
      <button
        className="bg-slate-100 hover:bg-slate-400 text-gray-900 font-bold py-1 px-2 rounded"
        onClick={handleClick}
      >
        Read more
      </button>
      {showMessage && (
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 absolute top-0 left-0 mt-4 z-50">
          <h2 className="text-gray-800">Comming Soon!</h2>
        </div>
      )}
    </div>
  );
};

export default PopupMessage;
