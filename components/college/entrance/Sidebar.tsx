
import React, { useState } from 'react';
import { Filter, RotateCcw, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FILTER_CATEGORIES } from './Constant';

interface SidebarProps {
  onReset: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onReset }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(FILTER_CATEGORIES.map(c => [c.id, true]))
  );

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 h-fit sticky top-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold text-slate-900">Filters</h2>
        </div>
        <button 
          onClick={onReset}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Quick Filters */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Filters</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
              Verified
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
              New
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-red-50 text-red-600 border border-red-100">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
              Closing
            </span>
          </div>
        </div>

        {/* Dynamic Filter Categories */}
        {FILTER_CATEGORIES.map((category) => (
          <div key={category.id} className="border-t border-slate-100 pt-5">
            <button 
              onClick={() => toggleSection(category.id)}
              className="flex items-center justify-between w-full mb-4 text-left group"
            >
              <span className="text-sm font-bold text-slate-800 group-hover:text-slate-900">{category.name}</span>
              {openSections[category.id] ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>
            
            {openSections[category.id] && (
              <div className="space-y-3">
                {category.searchable && (
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Filter Fields..." 
                      className="w-full bg-slate-50 border border-transparent focus:border-slate-200 focus:bg-white rounded-lg py-2 pl-9 pr-4 text-xs outline-none transition-all"
                    />
                  </div>
                )}
                <div className="space-y-2.5">
                  {category.options.map((option: string) => (
                    <label key={option} className="flex items-center group cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 transition-colors cursor-pointer" 
                      />
                      <span className="ml-3 text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-8 bg-[#1D68F2] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95">
        Find Entrance
      </button>
    </div>
  );
};

export default Sidebar;
