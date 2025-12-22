
import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

interface SidebarProps {
  affiliationFilters: string[];
  onFilterChange: (affiliation: string) => void;
  onReset: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ affiliationFilters, onFilterChange, onReset }) => {
  return (
    <div className="w-full md:w-80 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-fit sticky top-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
          <Filter size={20} className="text-blue-600" />
          <span>Filters</span>
        </div>
        <button 
          onClick={onReset}
          className="flex items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
        >
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-slate-900 mb-4">Affiliation:</h3>
        <div className="space-y-4">
          <label className="flex items-center cursor-pointer group">
            <div className="relative">
              <input 
                type="checkbox" 
                className="peer hidden" 
                checked={affiliationFilters.includes('Nepal University')}
                onChange={() => onFilterChange('Nepal University')}
              />
              <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
              <svg className="absolute top-1 left-1 w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="ml-3 text-gray-600 group-hover:text-slate-900 transition-colors">Nepal University</span>
            <span className="ml-2 text-[10px] text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">+32,00 Colleges</span>
          </label>

          <label className="flex items-center cursor-pointer group">
            <div className="relative">
              <input 
                type="checkbox" 
                className="peer hidden" 
                checked={affiliationFilters.includes('Foreign Affiliated University')}
                onChange={() => onFilterChange('Foreign Affiliated University')}
              />
              <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
              <svg className="absolute top-1 left-1 w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="ml-3 text-gray-600 group-hover:text-slate-900 transition-colors">Foreign Affiliated University</span>
            <span className="ml-2 text-[10px] text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">200 Colleges</span>
          </label>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
        Find University
      </button>
    </div>
  );
};

export default Sidebar;
