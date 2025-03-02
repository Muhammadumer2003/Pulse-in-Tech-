import React from 'react';

const RevampBanner = () => {
  return (
    <div className="relative bg-white flex items-center justify-between max-w-full px-[15%] py-5 rounded-lg overflow-hidden shadow-lg border border-gray-200">
      {/* Left Content Section */}
      <div className="p-6 max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">Revamp Your Site,</h2>
        <h1 className="text-5xl font-bold text-yellow-400 mb-4 leading-tight">RISK FREE!</h1>
        
        <p className="font-semibold mb-1">Already have a website?</p>
        <p className="text-gray-700 mb-6 text-sm">
          We offer a free audit and a special discount if you choose to revamp your site with us. Experience the difference our expertise can make!
        </p>
        
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-6 rounded">
          Claim Your Discount!
        </button>
      </div>
      
      {/* Right Image with Diamond Pattern Section */}
      <div className="relative h-full">
        {/* Diamond Pattern Background */}
        <div className="absolute right-0 top-0 h-full w-64 flex items-center justify-center">
          {/* Stacked Diamond Shapes */}
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-64 h-64 border-4 border-yellow-400"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-52 h-52 border-4 border-yellow-400"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-40 h-40 border-4 border-yellow-400"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 rotate-45 w-28 h-28 border-4 border-yellow-400"></div>
        </div>
        
        {/* Professional Woman Image */}
        <div className="relative h-64 w-64">
          <img 
            src="src\assets\_Image_ (20).png" 
            alt="Professional woman in business attire"
            className="bottom-9 right-9  z-10 relative " 
          />
        </div>
      </div>
    </div>
  );
};

export default RevampBanner;