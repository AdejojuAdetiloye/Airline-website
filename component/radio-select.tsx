import React from 'react'

const RadioSelect = () => {
  return (
    <div className=" relative flex justify-center items-center -mt-2 mb-4 p-4 bg-white ">
          <div className=" flex-col items-center justify-center space-x-2 sm:flex-row sm:space-x-4">
            {['One Way', 'Round Trip', 'Multi City'].map((label) => (
              <label key={label} className="flex items-center justify-center">
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
  )
}

export default RadioSelect
