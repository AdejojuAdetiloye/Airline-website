import React from 'react';
import airlines from "../utils/airlines";

const TopAirlines = () => {
  

  return (
    <div className="bg-gray-100 py-20 mt-12 mb-12 px-2">
      {/* Header Section */}
      <h1 className="text-center text-2xl font-bold mb-5 mt-10">Search Top Airlines</h1>
      <p className="text-center text-lg mb-20 text-wrap p-2">
        Experience the grandeur of air travel with AirlineSearch, catering to your needs on a grand scale.
      </p>

      {/* Airlines Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {airlines.map((airline, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg text-left"
          >
            {/* Airline Logo */}
            <div className="mb-4">
              <img
                src={airline.logo}
                alt={airline.name}
                className="w-24 h-auto mx-auto"
              />
            </div>

            {/* Airline Name */}
            <h3 className="text-xl font-bold mb-2">{airline.name}</h3>

            {/* Airline Description */}
            <p className="text-gray-600 mb-4">{airline.description}</p>

            {/* Book Now Button */}
            <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 bg-white rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAirlines;
