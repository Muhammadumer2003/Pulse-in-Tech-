import React from 'react';
import wome from "./assets/_Image_ (20).png";

const RevampBanner = () => {
  return (
    <div className="relative bg-white flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-8 md:px-[10%] lg:px-[15%] py-5 rounded-lg overflow-hidden shadow-lg border border-gray-200">
      {/* Left Content Section */}
      <div className="p-4 md:p-6 max-w-full md:max-w-md text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Revamp Your Site,</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-2 md:mb-4 leading-tight">RISK FREE!</h1>
        
        <p className="font-semibold mb-1 text-sm sm:text-base">Already have a website?</p>
        <p className="text-gray-700 mb-4 md:mb-6 text-xs sm:text-sm">
          We offer a free audit and a special discount if you choose to revamp your site with us. Experience the difference our expertise can make!
        </p>
        
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 sm:px-6 rounded text-sm sm:text-base mb-6 md:mb-0">
          Claim Your Discount!
        </button>
      </div>
      
      {/* Right Image with Diamond Pattern Section */}
      <div className="relative h-52 sm:h-56 md:h-64 w-52 sm:w-56 md:w-64 mt-4 md:mt-0">
        {/* Diamond Pattern Background */}
        <div className="absolute right-0 top-0 h-full w-full flex items-center justify-center">
          {/* Stacked Diamond Shapes - scaled for different screens */}
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-52 sm:w-56 md:w-64 h-52 sm:h-56 md:h-64 border-2 md:border-4 border-yellow-400"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-40 sm:w-44 md:w-52 h-40 sm:h-44 md:h-52 border-2 md:border-4 border-yellow-400"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 border-2 md:border-4 border-yellow-400"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 border-2 md:border-4 border-yellow-400"></div>
        </div>
        
        {/* Professional Woman Image */}
        <div className="relative h-52 sm:h-56 md:h-64 w-52 sm:w-56 md:w-64">
          <img 
            src={wome}
            alt="Professional woman in business attire"
            className="absolute bottom-6 sm:bottom-8 md:bottom-9 right-6 sm:right-8 md:right-9 z-10 max-w-full max-h-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default RevampBanner;