import React from 'react';
import qns from "./assets/_Compound Path_.png"
import bground from "./assets/bg.png"

const WhyChooseUs = () => {

  const handleClick = () => {
    window.location.href = "mailto:info@pulseintech.com";
  };
  return (
    <div className=" p-4 md:p-8 rounded-lg w-full max-w-screen-xl mx-auto"
    style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center">
        Why Choose Us 
        <div className="ml-2 relative">
          {/* <svg viewBox="0 0 24 24" width="28" height="28" className="text-yellow-500 md:w-36 md:h-36">
            <circle cx="12" cy="12" r="10" fill="#F59E0B" stroke="#F59E0B" />
            <path d="M12,17 L12,17.5 M12,14 L12,7" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </svg> */}
          <img src={qns} alt="" srcset="" className='h-32'/>
        </div>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {/* 100% Money-Back Guarantee */}
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-yellow-300 rounded-full p-2 md:p-3 flex items-center justify-center h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
            <span className="text-black font-bold text-sm md:text-lg">100%</span>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg">100% Money-Back Guarantee</h3>
            <p className="text-xs md:text-sm">We stand behind our work. If you're not satisfied, we'll make it right. (T&C applies)</p>
          </div>
        </div>
        
        {/* Dedicated Support */}
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-yellow-300 rounded-full p-2 md:p-3 flex items-center justify-center h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
            <div className="text-black font-bold text-xs md:text-sm flex flex-col items-center">
              <span>24</span>
              <span>/7</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg">Dedicated Support</h3>
            <p className="text-xs md:text-sm">Our team is available 24/7 to assist you with any questions or issues.</p>
          </div>
        </div>
        
        {/* Ownership Rights */}
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-yellow-300 rounded-full p-2 md:p-3 flex items-center justify-center h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="8" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg">Ownership Rights</h3>
            <p className="text-xs md:text-sm">You own your website completely—no strings attached.</p>
          </div>
        </div>
        
        {/* 2 Months Free Maintenance */}
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-yellow-300 rounded-full p-2 md:p-3 flex items-center justify-center h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div className="absolute top-0 right-0 bg-yellow-500 text-xxs md:text-xs font-bold text-white px-1 py-0.5 md:px-2 md:py-1 rounded">FREE</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg">2 Months Free Maintenance</h3>
            <p className="text-xs md:text-sm">We offer two months of free maintenance to keep your site running smoothly.</p>
          </div>
        </div>
        
        {/* Free SSL Certification */}
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-yellow-300 rounded-full p-2 md:p-3 flex items-center justify-center h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
            <div className="bg-gray-800 text-white font-bold px-1 py-0.5 md:px-2 md:py-1 rounded text-xxs md:text-xs">SSL</div>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg">Free SSL Certification</h3>
            <p className="text-xs md:text-sm">We include SSL certification to ensure your site is secure.</p>
          </div>
        </div>
        
        {/* Competitive Pricing */}
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-yellow-300 rounded-full p-2 md:p-3 flex items-center justify-center h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8l-8 8" />
              <path d="M8.5 8.5L8 12l3.5-.5" />
              <path d="M15.5 15.5L16 12l-3.5.5" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg">Competitive Pricing</h3>
            <p className="text-xs md:text-sm">Get top-tier service at prices that won't break the bank.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 md:mt-8 text-center">
        <button onClick={handleClick} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base">
          Connect with Us Now!
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;