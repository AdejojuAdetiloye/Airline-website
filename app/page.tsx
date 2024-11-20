"use client";
import RectangleImage from "@/component/rectangle-image";
import OverlayButtons from "@/component/overlay-buttons";
import RadioSelect from "@/component/radio-select";
import OptionsSelection from "@/component/options-selection";
import SearchButton from "@/component/search-button";
import TourPackage from "@/component/tour-package";
import TopAirlines from "@/component/top-airlines";
import Slider from "@/component/slider";
import CardsSection from "@/component/cards-section";
import PopularDestinations from "@/component/popular-destinations";

export default function Home() {
  return (
    <div className=" w-full sm:w-sm mx-auto justify-center items-center">
      {/* Main Container with padding for responsive spacing */}
      
        <div>

          {/* Image Container */}
          <div className=" relative w-full h-[223px] md:w-[1440px] md:h-[702px] mt-4  mx-auto">
              <RectangleImage />
          </div>

          <div className=" relative top-[-58px] md:top-[-200px] sm:top-[-200px] w-[300px] h-[600px]  items-center justify-center shadow-lg lg:w-[1197px] lg:h-[402px] mx-auto ">
            
            {/* Overlay Buttons */}
            <OverlayButtons />

            {/* Radio Buttons Section */}
            <RadioSelect />

            {/* Input Fields Section */}
             <OptionsSelection />

            {/* Search Button Section */}
             <SearchButton />
          </div>

        </div>
      

      {/* Slider Section */}
      <div className="w-full -mt-20">
        <Slider />
      </div>

      {/* Top Airlines Section */}
      <div className="w-full">
        <TopAirlines />
      </div>

      {/* Popular Destination Section */}
      <div className="w-full">
        <PopularDestinations />
      </div>

      {/* Cards Section */}
      <div className="w-full">
        <CardsSection />
      </div>
    </div>
  );
}
