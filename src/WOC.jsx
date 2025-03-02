import React from 'react';

const WebsiteOptimizationChecklist = () => {
  return (
    <div className="w-full relative overflow-hidden p-6">
      {/* Diamond pattern background */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30,0 L60,30 L30,60 L0,30 Z" fill="none" stroke="#FFE082" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Main content container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between p-6 z-10 relative">
        {/* Left side - Checklist Image */}
        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
          <div className="relative flex flex-col items-center">
            {/* Book cover mockup */}
            <div className="bg-black text-white pt-6 px-6 pb-16 w-64 rounded-sm shadow-lg text-center">
              <div className="text-xl font-bold mb-2">EXCLUSIVE</div>
              <div className="bg-yellow-400 text-black p-2 font-bold text-3xl text-center mb-2">WEBSITE<br />OPTIMIZATION</div>
              <div className="text-2xl font-bold flex items-center justify-center mb-6">
                CHECKLIST <span className="ml-2 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center">✓</span>
              </div>
            </div>
            
            {/* Phone mockup */}
            <div className="absolute -bottom-4 -right-6 bg-black rounded-2xl p-1 w-28 h-48 shadow-lg">
              <div className="bg-black text-white h-full w-full rounded-xl p-2 flex flex-col items-center">
                <img 
                  src="src/assets/_Image_ (18).png" 
                  alt="Exclusive Website Optimization" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="flex-grow max-w-md text-center lg:text-left">
          <h2 className="text-2xl font-medium mb-4 text-black">
            Unsure if your website is up to par? Download our FREE website audit guide to improve your site's performance!
          </h2>
          
          <p className="text-xl mb-3 font-medium text-black">Just enter your email below!</p>
          
          <div className="flex flex-col items-center lg:items-start">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-gray-200 py-3 px-4 rounded mb-4 w-full border border-gray-300 focus:ring-2 focus:ring-yellow-400"
            />
            
            <button className="bg-yellow-400 hover:bg-yellow-500 py-3 px-6 rounded font-bold text-lg text-center w-full">
              Get Your Free Checklist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteOptimizationChecklist;