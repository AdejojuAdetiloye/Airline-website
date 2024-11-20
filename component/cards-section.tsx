import React from 'react';
import cards from "../utils/cards";

const CardsSection = () => {
  

  return (
    <div className="py-10 bg-white mt-8 mb-8">
      {/* Header Section */}
      <h1 className="text-center text-3xl font-bold mb-10">Why Choose Us</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-[334px] h-[401px] mx-auto sm:w-[372px] sm:h-[401px] cursor-pointer text-center"
          >
            {/* Logo */}
            <img
              src={card.logo}
              alt={card.header}
              className="sm:w-[103px] sm:h-[103px] mb-4 mx-auto"
            />

            {/* Header */}
            <h2 className="text-2xl font-bold mb-2">{card.header}</h2>

            {/* Subheader */}
            <h4 className="text-lg font-bold text-gray-600 mb-2">
              {card.subHeader}
            </h4>

            {/* Description */}
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
24
export default CardsSection;
