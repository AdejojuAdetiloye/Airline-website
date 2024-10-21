import React from 'react'
import Image from "next/image";

const RectangleImage = () => {
  return (
    <div className="relative w-full h-60 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/static/images/rectangle.png"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
          />
        </div>
  )
}

export default RectangleImage
