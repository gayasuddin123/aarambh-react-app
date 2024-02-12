import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center " style={{backgroundImage: 'url("brainstorming-session.jpg")'}}>
      <div className="container px-4 text-center text-white mx-8">
        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-8 mt-8 p-4">Welcome to</h3>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 p-4">AARAMBH</h1>
        <p className="text-lg md:text-xl mb-8 p-4">A community where students learn, code, and innovate together.</p>
        <button className="bg-slate-600 hover:bg-slate-300 text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
