import React from 'react';
import Img1 from "./assets/_Image_ (12).png"
import Img2 from "./assets/_Image_ (13).png"
import Img3 from "./assets/_Image_ (14).png"
import Img4 from "./assets/_Image_ (15).png"
import Img5 from "./assets/_Image_ (16).png"
import Img6 from "./assets/_Image_ (17).png"

const PortfolioShowcase = () => {


  const handleClick = () => {
    window.location.href = "mailto:info@pulseintech.com";
  };


  // Portfolio items with image paths or URLs
  const portfolioItems = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4 },
    { id: 5, image: Img5 },
    { id: 6, image: Img6 }
  ];

  return (
    <div className="w-full bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-1">Your Brand Deserves</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">THE BEST</h1>
          <p className="mb-2 text-sm sm:text-base">Client Success Stories</p>
          
          {/* 5-Star Rating */}
          <div className="flex justify-center mb-3 sm:mb-4">
            {[1, 2, 3, 4, 5].map(star => (
              <span key={star} className="text-yellow-400 text-xl sm:text-2xl mx-1">★</span>
            ))}
          </div>
          
          <p className="max-w-xl mx-auto text-sm sm:text-base px-4">
            See how we've helped businesses like yours succeed with beautiful, 
            High-Performing Websites.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {portfolioItems.map(item => (
            <div 
              key={item.id} 
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={item.image} 
                alt={`Portfolio item ${item.id}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Call to Action Button */}
        <div className="text-center">
          <button onClick={handleClick} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 sm:py-3 px-6 sm:px-10 rounded-md text-base sm:text-xl transition-colors duration-300">
            Get in Touch!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;