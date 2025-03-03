import React, { useState } from 'react';
import person from "./assets/_Image_ (19).png";

const FAQSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What types of websites do you build?",
      answer: "We specialize in both e-commerce and service-based websites, tailored to meet your specific business needs."
    },
    {
      id: 2,
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of the project, but we aim to deliver within 4-6 weeks."
    },
    {
      id: 3,
      question: "Do you offer ongoing maintenance?",
      answer: "Yes, we provide ongoing maintenance packages to keep your website secure, up-to-date, and running smoothly."
    }
  ];

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="w-full bg-yellow-500 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left side content */}
          <div className="md:w-2/3">
            <div className="mb-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">FAQs</h1>
              <p className="text-lg md:text-xl text-gray-800">(Frequently Asked Questions)</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleQuestion(faq.id)}>
                    <p className="font-medium">Q. {faq.question}</p>
                    <button className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white">
                      {expandedQuestion === faq.id ? '-' : '+'}
                    </button>
                  </div>
                  {expandedQuestion === faq.id && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side with person and question mark */}
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="relative">
              <img 
                src={person}
                alt="Person thinking" 
                className="w-48 md:w-64 h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
