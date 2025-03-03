import React from 'react';

const PulseBanner = () => {
  return (
    <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-black flex items-center justify-center overflow-hidden px-4">
      {/* Pulse/Heartbeat lines */}
      <div className="absolute inset-0 flex items-center opacity-50">
        <div className="w-full h-10 sm:h-12 md:h-16 flex items-center">
          <svg viewBox="0 0 800 100" className="w-full h-auto">
            <path 
              d="M0,50 L100,50 L120,20 L140,80 L160,30 L180,70 L200,50 L300,50" 
              stroke="#FFD700" 
              strokeWidth="2" 
              fill="none" 
              className="pulse-line"
            />
            <path 
              d="M300,50 L400,50 L420,20 L440,80 L460,30 L480,70 L500,50 L600,50" 
              stroke="#FFD700" 
              strokeWidth="2" 
              fill="none" 
              className="pulse-line"
            />
            <path 
              d="M600,50 L700,50 L720,20 L740,80 L760,30 L780,70 L800,50" 
              stroke="#FFD700" 
              strokeWidth="2" 
              fill="none" 
              className="pulse-line"
            />
          </svg>
        </div>
      </div>
      
      {/* Text content */}
      <div className="z-10 text-center flex flex-col items-center px-4">
        <h2 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold italic mb-2 leading-tight">
          Ready to transform your online presence?
        </h2>
        <p className="text-yellow-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
          CONTACT US TODAY!
        </p>
      </div>
    </div>
  );
};

export default PulseBanner;