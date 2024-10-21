import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';

const Slider = () => {
  // Places data
  const places = [
    {
      image: '/static/images/image-1.png',
      name: 'Beautiful Beach',
      rating: 4.5,
      numberOfRatings: 120,
      duration: '2 days 2 nights',
      price: 300,
    },
    {
      image: '/static/images/image-2.png',
      name: 'Mountain View',
      rating: 4.8,
      numberOfRatings: 95,
      duration: '3 days 3 nights',
      price: 500,
    },
    {
      image: '/static/images/image-3.png',
      name: 'City Adventure',
      rating: 4.2,
      numberOfRatings: 230,
      duration: '1 day 1 night',
      price: 150,
    },
    {
      image: '/static/images/image-4.png',
      name: 'Forest Getaway',
      rating: 4.9,
      numberOfRatings: 75,
      duration: '4 days 4 nights',
      price: 700,
    },
  ];

  // Slider state and functions
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Handle screen resize for responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(1); // Mobile
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigate next and previous slides
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= places.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? places.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <div className="relative w-11/12 md:w-4/5 mx-auto overflow-hidden mt-8 mb-8">
      {/* Carousel Inner Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)` }}
      >
        {places.map((place, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 box-border">
            {/* Carousel Item */}
            <div className="border rounded-lg shadow-lg bg-white p-4">
              {/* Image */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </div>
              {/* Ratings */}
              <div className="text-yellow-500 mb-2">
                ⭐ {place.rating} ({place.numberOfRatings} ratings)
              </div>
              {/* Name */}
              <div className="text-xl font-bold mb-2">{place.name}</div>
              {/* Duration */}
              <div className="text-gray-600 flex items-center mb-4">
                <FaRegClock className="mr-2" /> {place.duration}
              </div>
              {/* Price */}
              <div className="text-lg font-bold text-blue-600 mb-4">${place.price}</div>
              {/* Book Button */}
              <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 bg-white rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Book This Tour
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center cursor-pointer" onClick={goToPreviousSlide}>
        <span className="text-2xl bg-gray-600 text-white p-2 rounded-full">&#10094;</span>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center cursor-pointer" onClick={goToNextSlide}>
        <span className="text-2xl bg-gray-600 text-white p-2 rounded-full">&#10095;</span>
      </div>

      {/* Dots Navigation */}
      <div className="text-center mt-4">
        {Array.from({ length: Math.ceil(places.length / itemsPerPage) }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`inline-block h-4 w-4 mx-1 rounded-full ${
              currentIndex === index * itemsPerPage ? 'bg-blue-600' : 'bg-gray-400'
            } cursor-pointer`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
