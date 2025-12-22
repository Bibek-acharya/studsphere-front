
import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="w-full bg-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
        Your Journey Starts With the <br /> Right University
      </h1>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Stop searching blindly. Update your profile and let our algorithm match you with the opportunities you deserve.
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-center bg-white border border-gray-200 rounded-2xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <div className="pl-4 pr-3 text-gray-400">
            <Search size={24} />
          </div>
          <input 
            type="text" 
            placeholder="Search scholarship name, college or keywords..." 
            className="w-full py-3 outline-none text-gray-700 text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button 
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
