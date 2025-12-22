
import React from 'react';
import { SEARCH_ICON } from './Constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-12 px-4 text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Your Journey Starts With the <br />
          <span className="text-gray-900">Right University</span>
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto font-medium">
          Stop searching blindly. Update your profile and let our algorithm match you with the opportunities you deserve.
        </p>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
            <div className="pl-4 pr-3">
              {SEARCH_ICON}
            </div>
            <input 
              type="text" 
              placeholder="Search scholarship name, college or keywords..." 
              className="flex-grow bg-transparent outline-none text-gray-700 py-3"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
