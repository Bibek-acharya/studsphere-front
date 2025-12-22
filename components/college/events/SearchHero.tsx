
import React from 'react';
import { Search } from 'lucide-react';

interface SearchHeroProps {
  onSearch: (query: string) => void;
}

export const SearchHero: React.FC<SearchHeroProps> = ({ onSearch }) => {
  return (
    <section className="py-20 px-4 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
        Unlock Your Future
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-500 to-blue-500">
          Scholarships in Nepal & Beyond
        </span>
      </h2>
      <p className="text-gray-500 max-w-2xl mb-12">
        Stop searching blindly. Update your profile and let our algorithm match you 
        with the opportunities you deserve.
      </p>
      
      <div className="relative w-full max-w-3xl">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search scholarship name, college or keywords..."
          className="w-full py-5 pl-14 pr-6 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 text-lg transition-all"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </section>
  );
};
