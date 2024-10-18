"use client";
import Image from "next/image";
import { FaRegClock } from 'react-icons/fa';
import { useState } from 'react';


export default function Home() {

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

const airlines = [
    {
      logo: '/static/logo/logo-62.png',
      name: 'SkyHigh Airlines',
      description: 'Luxury air travel with world-class service.',
    },
    {
      logo: '/static/logo/logo-63.png',
      name: 'JetStream Air',
      description: 'Affordable flights with premium comfort.',
    },
    {
      logo: '/static/logo/logo-62.png',
      name: 'Eagle Wings',
      description: 'Fly faster with high-speed connections worldwide.',
    },
    {
      logo: '/static/logo/logo-62.png',
      name: 'Cloud Nine Aviation',
      description: 'Experience the future of air travel today.',
    },
    {
      logo: '/static/logo/logo-62.png',
      name: 'Global Air',
      description: 'Connecting you to every corner of the globe.',
    },
    {
      logo: '/static/logo/logo-62.png',
      name: 'Star Air',
      description: 'Reach for the stars with Star Air’s premium flights.',
    },
    {
      logo: '/static/logo/logo-62.png',
      name: 'Voyager Airlines',
      description: 'Adventure is only a flight away.',
    },
    {
      logo: '/static/logo/logo-62.png',
      name: 'WingSpan Airways',
      description: 'Maximize your flight experience with us.',
    },
  ];

  const destinations = [
    {
      image: '/static/images/top-place-1.png',
      name: 'Paris, France',
    },
    {
      image: '/static/images/top-place-2.png',
      name: 'New York, USA',
    },
    {
      image: '/static/images/top-place-3.png',
      name: 'Tokyo, Japan',
    },
    {
      image: '/static/images/top-place-4.png',
      name: 'Sydney, Australia',
    },
    {
      image: '/static/images/top-place-5.png',
      name: 'Rome, Italy',
    },
    {
      image: '/static/images/top-place-6.png',
      name: 'Cape Town, South Africa',
    },
  ];

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

  const [isFlight,setIsFlight] = useState(true);
  const [isTour,setIsTour] = useState(false);

  const changeToTour = () => {
    setIsTour(!isTour);
    setIsFlight(!isFlight);
  }
  const changeToFlight = () => {
    setIsTour(!isTour);
    setIsFlight(!isFlight);
  }

//slider variables and functions
   const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

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
    <div>
       
    <div className="flex items-center justify-center min-h-[calc(10vh-4rem)] w-full bg-white mt-30 mb-30">
      <div className="max-w-[1220px] w-full relative">
        {/* Image Container */}
        <div className="relative w-full h-60 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/static/images/rectangle.png"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overlay Div for Buttons */}
        <div className="relative inset-0 -mt-20 flex flex-col items-center justify-center text-white">
          {/* Container for Buttons */}
          <div className="flex space-x-4  bg-white rounded-lg shadow-lg p-3">
            <div className="flex items-center">
              <Image src="/static/logo/flight-logo.png" width={30} height={30} alt="flight" />
              <button type="button" onClick={changeToFlight} className="text-blue-500 p-2 font-semibold border">Flight</button>
            </div>
            <div className="flex items-center">
              <Image src="/static/logo/tour-logo.png" width={30} height={30} alt="tour" />
              <button type="button" onClick={changeToTour} className= {`text-blue-500 p-2 font-semibold ${isTour} ? border border-b-black`}>Tour</button>
            </div>
          </div>
        </div>

        {/* Radio Buttons Section */}
        <div className=" relative flex justify-center items-center -mt-2 mb-4 p-4 bg-white ">
          <div className="flex space-x-4">
            {['One Way', 'Round Trip', 'Multi City'].map((label) => (
              <label key={label} className="flex items-center">
                <input
                  type="radio"
                  name="trip-type"
                  value={label.toLowerCase().replace(' ', '-')}
                  className="mr-2"
                />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Input Fields Section */}
        <div className="relative flex justify-center items-center -mt-5 mb-4 bg-white border border-b-cyan p-7">
          
            <div className="max-w-[220px] p-2 border border-t-white border-cyan-100 box-border mx-2">
              <div className="font-semibold">From</div>
              <div className="flex items-center">
                <Image src="/static/logo/flight-logo.png" width={30} height={30} alt="icon" />
                <div className="flex flex-col ml-2">
                  <select className="w-full p-1 border border-cyan-200 rounded">
                    <option value="option1">{`Bangladesh Airport International`}</option>
                    <option value="option2">{`WestHam Airport, Germany`}</option>
                    <option value="option3">{`International Airport, USA`}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="max-w-[220px] p-2 border border-t-white border-cyan-100 box-border mx-2">
              <div className="font-semibold">From</div>
              <div className="flex items-center">
                <Image src="/static/logo/flight-down.png" width={30} height={30} alt="icon" />
                <div className="flex flex-col ml-2">
                  <select className="w-full p-1 border border-cyan-200 rounded">
                    <option value="option1">{`Bangladesh Airport International`}</option>
                    <option value="option2">{`WestHam Airport, Germany`}</option>
                    <option value="option3">{`International Airport, USA`}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="max-w-[220px] p-2 border border-t-white border-cyan-100 box-border mx-2">
              <div className="font-semibold">Date</div>
              <div className="flex items-center">
                <Image src="/static/logo/calender.png" width={30} height={30} alt="icon" />
                <div className="flex flex-col ml-2">
                  <select className="w-full p-1 border border-cyan-200 rounded">
                    <option value="option1">{`Bangladesh Airport International`}</option>
                    <option value="option2">{`WestHam Airport, Germany`}</option>
                    <option value="option3">{`International Airport, USA`}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="max-w-[220px] p-2 border border-t-white border-cyan-100 box-border mx-2">
              <div className="font-semibold">Person</div>
              <div className="flex items-center">
                <Image src="/static/logo/person.png" width={30} height={30} alt="icon" />
                <div className="flex flex-col ml-2">
                  <select className="w-full p-1 border border-cyan-200 rounded">
                    <option value="option1">{`Bangladesh Airport International`}</option>
                    <option value="option2">{`WestHam Airport, Germany`}</option>
                    <option value="option3">{`International Airport, USA`}</option>
                  </select>
                </div>
              </div>
            </div>
          
        </div>

        {/* Search Button Section */}
        <div className="flex justify-center items-center mb-10 mt-4">
          <button className="bg-[#065279] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700">
            Search Flight
          </button>
        </div>
        
        {/* Tour Package Header */}
        <div className="text-center">
          <h1 className="text-gray-800 font-bold mt-20 mb-10 text-3xl md:text-4xl">Our Tour Package</h1>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .text-3xl {
            font-size: 2rem; /* Smaller font size on mobile */
          }
        }
      `}</style>
    </div>

        {/* Divs Slider */}
     <div className="carousel-container mt-30 mb-30">
      {/* Carousel Inner Container */}
      <div className="carousel-inner">
        {/* Inner div to control sliding */}
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
          }}
        >
          {places.map((place, index) => (
            <div className="carousel-item" key={index}>
              {/* Image */}
              <div className="carousel-image">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </div>

              {/* Ratings */}
              <div className="carousel-rating">
                ⭐ {place.rating} ({place.numberOfRatings} ratings)
              </div>

              {/* Name */}
              <div className="carousel-name">{place.name}</div>

              {/* Duration */}
              <div className="carousel-duration">
                <FaRegClock className="duration-icon" /> {place.duration}
              </div>

              {/* Price */}
              <div className="carousel-price">${place.price}</div>

              {/* Book Button */}
              <button className="book-button">
                Book This Tour
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="nav-arrow left-arrow" onClick={goToPreviousSlide}>
        &#10094; {/* Left arrow */}
      </div>
      <div className="nav-arrow right-arrow" onClick={goToNextSlide}>
        &#10095; {/* Right arrow */}
      </div>

      {/* Dots Navigation */}
      <div className="dots-navigation">
        {Array.from({ length: Math.ceil(places.length / itemsPerPage) }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`dot ${currentIndex === index * itemsPerPage ? 'active' : ''}`}
          ></span>
        ))}
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 90%;
          margin: 0 auto;
          overflow: hidden;
        }

        .carousel-inner {
          display: flex;
        }

        .carousel-slides {
          display: flex;
          transition: transform 0.5s ease;
        }

        .carousel-item {
          min-width: calc(100% / 3); /* Display 3 items at a time */
          box-sizing: border-box;
          padding: 20px;
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #fff;
          margin: 10px 5px; /* Spacing between items */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .carousel-image {
          margin-bottom: 10px;
          border-radius: 8px;
          overflow: hidden;
        }

        .carousel-rating {
          margin-bottom: 8px;
          font-size: 16px;
          color: #ffcc00;
        }

        .carousel-name {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .carousel-duration {
          font-size: 16px;
          color: #555;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        .duration-icon {
          margin-right: 5px;
        }

        .carousel-price {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .book-button {
          padding: 10px 20px;
          border: 2px solid blue;
          background-color: white;
          color: blue;
          cursor: pointer;
          transition: 0.3s ease;
          border-radius: 5px;
          font-weight: bold;
        }

        .book-button:hover {
          background-color: blue;
          color: white;
        }

        .nav-arrow {
          position: absolute;
          bottom: 10px;
          cursor: pointer;
          font-size: 24px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        .left-arrow {
          left: 10px;
        }

        .right-arrow {
          right: 10px;
        }

        .nav-arrow:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }

        .dots-navigation {
          text-align: center;
          margin-top: 20px;
        }

        .dot {
          cursor: pointer;
          height: 15px;
          width: 15px;
          margin: 0 5px;
          background-color: gray;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.3s;
        }

        .dot.active {
          background-color: blue;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .carousel-item {
            min-width: calc(100% / 2); /* 2 items per row for medium screens */
          }

          .carousel-name {
            font-size: 18px;
          }

          .carousel-price {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .carousel-item {
            min-width: 100%; /* 1 item per row for small screens */
          }

          .book-button {
            padding: 8px 16px;
          }

          .nav-arrow {
            font-size: 20px;
            padding: 8px;
          }
        }
      `}</style>
    </div>
     
      {/* Search Airlines */}
      <div
      style={{
        backgroundColor: '#f7f7f7', // Light gray background
        padding: '40px 20px',
        marginTop:50 ,
        marginBottom:50// Padding around the section
      }}
    >
      {/* Header Section */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Search Top Airlines
      </h1>
      <p
        style={{
          textAlign: 'center',
          fontSize: '18px',
          marginBottom: '40px',
        }}
      >
        Experience the grandeur of air travel with AirlineSearch, catering to your needs on a grand scale.
      </p>

      {/* Airlines Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
          gap: '20px', // 20px gaps between divs
          maxWidth: '1220px',
          margin: '0 auto', // Center the grid
        }}
      >
        {airlines.map((airline, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white', // White background for each airline div
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a clean look
              textAlign: 'left', // Start content from the left
            }}
          >
            {/* Airline Logo */}
            <div style={{ marginBottom: '15px' }}>
              <img
                src={airline.logo}
                alt={airline.name}
                style={{ width: '100px', height: 'auto' }} // Adjust logo size
              />
            </div>

            {/* Airline Name */}
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              {airline.name}
            </h3>

            {/* Airline Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#555',
                marginBottom: '15px',
              }}
            >
              {airline.description}
            </p>

            {/* Book Now Button */}
            <button
              style={{
                padding: '10px 20px',
                border: '2px solid blue',
                backgroundColor: 'white',
                color: 'blue',
                cursor: 'pointer',
                transition: '0.3s ease',
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'blue';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'blue';
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for tablet screens */
          }
        }

        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr; /* 1 column for mobile screens */
          }
        }
      `}</style>
      </div>

      {/* Popular places */}
      <div
      style={{
        padding: '40px 20px',
        backgroundColor: 'white', // Light gray background for contrast
      }}
    >
      {/* Header Section */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '40px',
        }}
      >
        Popular Destinations
      </h1>

      {/* Destinations Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns for desktop
          gap: '20px', // 20px gap between images
          maxWidth: '1220px',
          margin: '0 auto', // Center the grid
        }}
      >
        {destinations.map((destination, index) => (
          <div
            key={index}
            style={{
              position: 'relative', // Position for text overlay
              borderRadius: '8px',
              overflow: 'hidden', // Ensure text stays within the image
            }}
          >
            {/* Image wrapped in a clickable div */}
            <div
              style={{
                cursor: 'pointer', // Change cursor to pointer
              }}
              onClick={() => {
                // Add your click handler logic here
                alert(`You clicked on ${destination.name}!`);
              }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover', // Ensure images cover the space without distortion
                }}
              />

              {/* Text Overlay */}
              
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
          }
        }

        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr; /* 1 column for mobile screens */
          }
        }
      `}</style>
      </div>

        {/* Cards Section */}
        <div
      style={{
        padding: '40px 20px',
        backgroundColor: 'white', 
        marginBottom: 30,
        marginTop:30// Light gray background for contrast
      }}
    >
      {/* Bold Header */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '40px',
        }}
      >
        Why Choose Us
      </h1>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns for desktop
          gap: '20px', // Gap between cards
          maxWidth: '1220px',
          margin: '0 auto', // Center the grid
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white', // White background for the card
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Elevated effect with shadow
              textAlign: 'center', // Center align text
            }}
          >
            {/* Logo */}
            <img
              src={card.logo}
              alt={card.header}
              style={{
                width: '100px',
                height: 'auto',
                marginBottom: '15px',
              }}
            />
            {/* Header */}
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              {card.header}
            </h2>
            {/* Subheader */}
            <h4
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#555', // Gray color for subheader
              }}
            >
              {card.subHeader}
            </h4>
            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#666',
                marginBottom: '0',
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
          }
        }

        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr; /* 1 column for mobile screens */
          }
        }
      `}</style>
        </div>
    </div>
  );
}
