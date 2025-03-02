import React from 'react';

const PulseBanner = () => {
  return (
    <div className="relative w-full h-32 bg-black flex items-center justify-center overflow-hidden">
      {/* Pulse/Heartbeat lines with reduced opacity */}
      <div className="absolute inset-0 flex items-center opacity-40">
        <div className="w-full h-16 flex items-center">
          <svg viewBox="0 0 800 100" className="w-full">
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
      <div className="z-10 text-center px-4 flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold italic mb-1">
          Ready to transform your online presence?
        </h2>
        <div className="relative">
          <p className="text-yellow-400 text-xl md:text-2xl font-bold">
            CONTACT US TODAY!
          </p>
          {/* Additional pulse line specifically aligned with the contact text */}
          {/* <div className="absolute w-full bottom-0 left-0">
            <svg viewBox="0 0 300 20" className="w-full">
              <path 
                d="M0,10 L30,10 L40,5 L50,15 L60,5 L70,15 L80,10 L120,10 L130,5 L140,15 L150,5 L160,15 L170,10 L210,10 L220,5 L230,15 L240,5 L250,15 L260,10 L300,10" 
                stroke="#FFD700" 
                strokeWidth="1.5" 
                fill="none"
              />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PulseBanner;