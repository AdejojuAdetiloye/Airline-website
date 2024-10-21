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

export default function Home() {
  return (
    <div>
      {/* Main Container with padding for responsive spacing */}
      <div className="flex flex-col items-center justify-center min-h-[calc(10vh-4rem)] w-full bg-white mt-12 mb-12 px-4 lg:px-0">
        <div className="max-w-[1220px] w-full relative">
          {/* Image Container */}
          <RectangleImage />

          {/* Overlay Buttons */}
          <OverlayButtons />

          {/* Radio Buttons Section */}
          <RadioSelect />

          {/* Input Fields Section */}
          <OptionsSelection />

          {/* Search Button Section */}
          <SearchButton />

          {/* Tour Package Header */}
          <TourPackage />
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full">
        <Slider />
      </div>

      {/* Top Airlines Section */}
      <div className="w-full">
        <TopAirlines />
      </div>

      {/* Cards Section */}
      <div className="w-full">
        <CardsSection />
      </div>
    </div>
  );
}
