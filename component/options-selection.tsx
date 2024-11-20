import React from 'react'
import Image from "next/image" 

const OptionsSelection = () => {
  return (
    <div className="relative flex flex-col items-start sm:flex-row justify-center sm:items-center -mt-5 mb-4 bg-white  p-7">
          
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
                    <option value="option1">{`22-4-2024`}</option>
                    <option value="option2">{`12-5 -2024`}</option>
                    <option value="option3">{`4-7-2024`}</option>
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
                    <option value="option1">{`1 person`}</option>
                    <option value="option2">{`5 persons`}</option>
                    <option value="option3">{`10 persons`}</option>
                  </select>
                </div>
              </div>
            </div>
          
        </div>
  )
}

export default OptionsSelection
