import React from 'react'
import Image from "next/image";

const RectangleImage = () => {
  return (
    <Image
            src="/static/images/rectangle.png"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
          />
    
  )
}

export default RectangleImage
