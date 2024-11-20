/* eslint-disable @next/next/no-img-element */
import React from 'react'
import destinations from "../utils/popular-destinations";

const PopularDestinations = () => {
    
<<<<<<< HEAD
    //popular destinations
     const destinations = [
    {
      image: '/static/images/top-place-1.png',
      name: 'Verrazano Bridge',
    },
    {
      image: '/static/images/top-place-2.png',
      name: 'New York City Bridge',
    },
    {
      image: '/static/images/top-place-3.png',
      name: 'Francesco Mancini',
    },
    {
      image: '/static/images/top-place-4.png',
      name: 'Verrazano Narrows Bridge',
    },
    {
      image: '/static/images/top-place-5.png',
      name: 'Sun Francesco Bridge',
    },
    {
      image: '/static/images/top-place-6.png',
      name: 'China bridge',
    },
  ];
=======
   
>>>>>>> fb501d317eaf1c91c3a4ce5f02f43952da41ba8b

  return (
     <div
    >
      {/* Header Section */}
      <h1 className='font-bold text-center text-2xl sm:text-4xl mb-10 '>
        Popular Destinations
      </h1>

      {/* Destinations Grid */}
      <div
        className=' grid grid-cols-2 w-full gap-5 mx-auto sm:grid-cols-3 sm:w-[1220px]'
      >
        {destinations.map((destination, index) => (
          <div
            key={index}
            className='rounded-20'
          >
            {/* Image wrapped in a clickable div */}
            <div className='cursor-pointer'>
              <img
                src={destination.image}
                alt={destination.name}
                className='w-[250px] h-[200px] sm:w-[410px] sm:h-[300px] object-cover'
              />

              {/* Text Overlay */}
              
            </div>
          </div>
        ))}
      </div>

      
   
      </div>
  )
}

export default PopularDestinations
