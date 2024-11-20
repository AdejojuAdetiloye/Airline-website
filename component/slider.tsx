<<<<<<< HEAD
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Slider = () => {
  // Places data
  const places = [
    {
      image: "static/images/image-1.png",
      name: "Beautiful Beach",
      rating: 4.5,
      numberOfRatings: 120,
      duration: "2 days 2 nights",
      price: 300,
    },
    {
      image: "static/images/image-2.png",
      name: "Mountain View",
      rating: 4.8,
      numberOfRatings: 95,
      duration: "3 days 3 nights",
      price: 500,
    },
    {
      image: "static/images/image-3.png",
      name: "City Adventure",
      rating: 4.2,
      numberOfRatings: 230,
      duration: "1 day 1 night",
      price: 150,
    },
    {
      image: "static/images/image-4.png",
      name: "Forest Getaway",
      rating: 4.9,
      numberOfRatings: 75,
      duration: "4 days 4 nights",
      price: 700,
    },
  ];
=======
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import places from "../utils/slider-items";

const Slider = () => {
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
>>>>>>> fb501d317eaf1c91c3a4ce5f02f43952da41ba8b

  return (
    <>
    <h1 className="font-bold text-center text-2xl sm:text-4xl mt-20">Our Tour Package</h1>
    <Carousel
      className="w-full  sm:w-full  mt-20 mb-30"
    >
      <CarouselContent className="w-full sm:w-[1440px] mx-auto sm:ml-[200px]">
        {places.map((place, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="w-[230px] h-[400px] sm:w-[250px] sm:h-[400px] shadow-md p-2">
                <img src={place.image} alt="image" className="w-[230px] h-[250px] sm:w-[250px] sm:h-[250px]"/>
                <CardDescription>⭐⭐⭐⭐⭐{place.rating}</CardDescription>
                <CardDescription>{place.name}</CardDescription>
                <CardDescription>{place.duration}</CardDescription>
                <CardDescription>${place.price}</CardDescription>
                <button className="border border-teal-500 p-1 mt-1">Buy Now</button>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </>
  );
};

export default Slider;
