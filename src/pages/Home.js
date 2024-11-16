import React from 'react';

const Home = ({ isLoggedIn }) => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1920x1080/?technology,nature')`, // Replace with your desired image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Home Page</h1>
        <p className="text-xl mb-8">
          {isLoggedIn ? 'Happy to see you again!' : 'Explore and stay connected.'}
        </p>
        <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded shadow-lg transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
