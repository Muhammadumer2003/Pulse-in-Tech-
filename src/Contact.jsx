import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-yellow-200 p-8 rounded-lg w-full max-w-screen-xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-6 flex items-center justify-center">
        Why Choose Us 
        <div className="ml-2 relative">
          <svg viewBox="0 0 24 24" width="36" height="36" className="text-yellow-500">
            <circle cx="12" cy="12" r="10" fill="#F59E0B" stroke="#F59E0B" />
            <path d="M12,17 L12,17.5 M12,14 L12,7" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* 100% Money-Back Guarantee */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-300 rounded-full p-3 flex items-center justify-center h-16 w-16 flex-shrink-0">
            <span className="text-black font-bold text-lg">100%</span>
          </div>
          <div>
            <h3 className="font-bold text-lg">100% Money-Back Guarantee</h3>
            <p className="text-sm">We stand behind our work. If you're not satisfied, we'll make it right. (T&C applies)</p>
          </div>
        </div>
        
        {/* Dedicated Support */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-300 rounded-full p-3 flex items-center justify-center h-16 w-16 flex-shrink-0">
            <div className="text-black font-bold text-sm flex flex-col items-center">
              <span>24</span>
              <span>/7</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Dedicated Support</h3>
            <p className="text-sm">Our team is available 24/7 to assist you with any questions or issues.</p>
          </div>
        </div>
        
        {/* Ownership Rights */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-300 rounded-full p-3 flex items-center justify-center h-16 w-16 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="8" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg">Ownership Rights</h3>
            <p className="text-sm">You own your website completely—no strings attached.</p>
          </div>
        </div>
        
        {/* 2 Months Free Maintenance */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-300 rounded-full p-3 flex items-center justify-center h-16 w-16 flex-shrink-0">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold text-white px-2 py-1 rounded">FREE</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">2 Months Free Maintenance</h3>
            <p className="text-sm">We offer two months of free maintenance to keep your site running smoothly.</p>
          </div>
        </div>
        
        {/* Free SSL Certification */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-300 rounded-full p-3 flex items-center justify-center h-16 w-16 flex-shrink-0">
            <div className="bg-gray-800 text-white font-bold px-2 py-1 rounded text-xs">SSL</div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Free SSL Certification</h3>
            <p className="text-sm">We include SSL certification to ensure your site is secure.</p>
          </div>
        </div>
        
        {/* Competitive Pricing */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-300 rounded-full p-3 flex items-center justify-center h-16 w-16 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8l-8 8" />
              <path d="M8.5 8.5L8 12l3.5-.5" />
              <path d="M15.5 15.5L16 12l-3.5.5" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg">Competitive Pricing</h3>
            <p className="text-sm">Get top-tier service at prices that won't break the bank.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg">
          Connect with Us Now!
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;