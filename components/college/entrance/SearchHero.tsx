
import React from 'react';
import { Search } from 'lucide-react';

const SearchHero: React.FC = () => {
  return (
    <div className="pt-16 pb-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        Your Journey Starts With the <br />
        <span className="text-black">Right University</span>
      </h1>
      <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
        Stop searching blindly. Update your profile and let our algorithm match you 
        with the opportunities you deserve.
      </p>
      
      <div className="relative max-w-3xl mx-auto">
        <div className="flex items-center bg-white border border-slate-200 rounded-full p-2 pl-6 shadow-sm hover:shadow-md transition-shadow">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search scholarship name, college or keywords..." 
            className="grow bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
          />
          <button className="bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold py-2.5 px-8 rounded-full transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
