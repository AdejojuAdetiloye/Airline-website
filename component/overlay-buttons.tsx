import React from 'react'
import Image from "next/image"
import { useState } from 'react';

const OverlayButtons = () => {

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
  return (
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
  )
}

export default OverlayButtons
