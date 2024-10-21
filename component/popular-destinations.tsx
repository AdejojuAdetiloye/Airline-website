import React from 'react'

const PopularDestinations = () => {
    
    //popular destinations
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

  return (
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
  )
}

export default PopularDestinations
