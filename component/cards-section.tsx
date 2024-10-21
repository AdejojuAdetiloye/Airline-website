import React from 'react';

const CardsSection = () => {
  // Cards data
  const cards = [
    {
      logo: '/static/logo/group-1.png',
      header: 'Quality Service',
      subHeader: 'We prioritize your needs',
      description: 'Our team is dedicated to providing top-notch services tailored to your requirements.',
    },
    {
      logo: '/static/logo/group-2.png',
      header: 'Expert Team',
      subHeader: 'Professionals at your service',
      description: 'Our experts bring years of experience to ensure you receive the best advice.',
    },
    {
      logo: '/static/logo/group-3.png',
      header: 'Customer Satisfaction',
      subHeader: 'Your happiness is our mission',
      description: 'We strive to exceed your expectations and make your experience memorable.',
    },
  ];

  return (
    <div className="py-10 bg-white mt-8 mb-8">
      {/* Header Section */}
      <h1 className="text-center text-3xl font-bold mb-10">Why Choose Us</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            {/* Logo */}
            <img
              src={card.logo}
              alt={card.header}
              className="w-24 h-auto mb-4 mx-auto"
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

export default CardsSection;
