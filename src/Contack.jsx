import React, { useState } from 'react';
import bground from "./assets/bg.png"
import bgtt from "./assets/logo.png"


const PulseInTechLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleClick = () => {
    window.location.href = "mailto:info@pulseintech.com";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    alert('Thank you for your submission! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* <h1 className="text-2xl font-bold">
              <span className="text-yellow-500">pulse</span>
              <span className="text-gray-800">in</span>
              <span className="text-yellow-500">tech</span>
            </h1> */}
            <img 
                            src={bgtt} 
                            alt="Pulse in Tech Logo" 
                            className="h-8"
                          />
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center mr-4">
              <svg className="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-600">Call us Now!</span>
            </div>
            <a href="tel:647-482-0544" className="text-gray-800 font-semibold">647-482-0545</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <div className="mb-8">
              <p className="text-gray-600 mb-2">Elevate Your Brand with a</p>
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-yellow-500">Website</span>
                <br />
                That Converts
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you're starting fresh or need a redesign, we 
                build high-converting websites that modernize your 
                digital presence and help elevate your brand.
              </p>
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                Let's Discuss Strategy
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-6"
            style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h3 className="text-xl font-semibold mb-4 text-center">Get a Free Proposal</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>
                <button
                onClick={handleClick}
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Honeycomb Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full max-w-md opacity-10 pointer-events-none hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute" style={{
            top: `${i * 15}%`,
            right: `${(i % 2) * 10}%`,
          }}>
            <svg className="w-24 h-24 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L4 6v12l8 5 8-5V6l-8-5z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PulseInTechLanding;