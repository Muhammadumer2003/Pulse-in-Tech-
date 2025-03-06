import React from 'react';
import issue1 from "./assets/_Group_ (3).png";
import issue2 from "./assets/_Group_ (16).png";
import issue3 from "./assets/_Image_ (8).png";
import issue4 from "./assets/_Group_ (9).png";
import issue5 from "./assets/_Image_ (9).png";
import bground from "./assets/bg.png"

const BusinessWebsiteUI = () => {
  return (
    <div className="flex justify-center items-center h-full bg-[url('src/assets/bg.png')] bg-cover bg-center bg-no-repeat p-4"
    style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-4xl w-full relative">
        {/* Yellow squares decoration */}
        <div className="absolute -right-6 top-4 hidden md:block">
          <div className="w-12 h-12 bg-yellow-400 rounded-md opacity-70"></div>
          <div className="w-8 h-8 bg-yellow-300 rounded-md ml-8 mt-2 opacity-70"></div>
        </div>
        <div className="absolute left-2 top-16 hidden md:block">
          <div className="w-10 h-10 bg-yellow-200 rounded-md opacity-50"></div>
        </div>
        <div className="absolute left-4 bottom-16 hidden md:block">
          <div className="w-12 h-12 bg-yellow-200 rounded-md opacity-50"></div>
        </div>
        <div className="absolute right-16 bottom-20 hidden md:block">
          <div className="w-10 h-10 bg-yellow-200 rounded-md opacity-50"></div>
        </div>

        {/* Main Header */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Why Your Business</h1>
          <p className="text-gray-500 text-sm md:text-base">Needs a Better Website</p>
        </div>

        {/* Top row - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Issue 1 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 border border-gray-300 rounded-lg mb-2 md:mb-4 flex items-center justify-center bg-white overflow-hidden">
              <img 
                src={issue1}
                alt="Outdated website design" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-1">Outdated Design</h3>
            <p className="text-xs md:text-sm text-center text-gray-600">
              An outdated website can leave visitors with a negative impression that translates into reduced trust
            </p>
          </div>

          {/* Issue 2 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 border border-gray-300 rounded-lg mb-2 md:mb-4 flex items-center justify-center bg-white overflow-hidden">
              <img 
                src={issue2} 
                alt="Poor user experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-1">Poor User Experience</h3>
            <p className="text-xs md:text-sm text-center text-gray-600">
              A poor site that's complicated or slow frustrates users and leads to missed conversions
            </p>
          </div>

          {/* Issue 3 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 border border-gray-300 rounded-lg mb-2 md:mb-4 flex items-center justify-center bg-white overflow-hidden">
              <img 
                src={issue3}
                alt="Limited functionality" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-1">Limited Functionality</h3>
            <p className="text-xs md:text-sm text-center text-gray-600">
              An outdated site may not support the latest integrations or features your business needs
            </p>
          </div>
        </div>

        {/* Bottom row - 2 centered items */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          {/* Issue 4 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 border border-gray-300 rounded-lg mb-2 md:mb-4 flex items-center justify-center bg-white overflow-hidden">
              <img 
                src={issue4}
                alt="Lack of mobile optimization" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-1">Lack of Mobile Optimization</h3>
            <p className="text-xs md:text-sm text-center text-gray-600">
              With more users browsing on mobile, a non-responsive site is a missed opportunity
            </p>
          </div>

          {/* Issue 5 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 border border-gray-300 rounded-lg mb-2 md:mb-4 flex items-center justify-center bg-white overflow-hidden">
              <img 
                src={issue5}
                alt="Inefficient management" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-1">Inefficient Management</h3>
            <p className="text-xs md:text-sm text-center text-gray-600">
              Without the right CMS, updating content or managing your site is time-consuming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessWebsiteUI;