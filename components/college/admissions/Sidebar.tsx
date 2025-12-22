
import React, { useState } from 'react';

interface FilterGroupProps {
  title: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, isOpen = true, children }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="border-b border-gray-100 py-4 last:border-b-0">
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full font-bold text-gray-800 mb-2"
      >
        <span>{title}</span>
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="space-y-2 mt-3">{children}</div>}
    </div>
  );
};

const CheckboxOption: React.FC<{ label: string; count?: number }> = ({ label, count }) => (
  <label className="flex items-center group cursor-pointer">
    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
    <span className="ml-3 text-gray-600 group-hover:text-blue-600 transition-colors grow text-sm font-medium">{label}</span>
    {count !== undefined && <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">+{count} Colleges</span>}
  </label>
);

const SidebarFilters: React.FC = () => {
  return (
    <aside className="bg-white border-r border-gray-200 w-full md:w-80 h-full overflow-y-auto hidden md:block">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
             </svg>
             <h2 className="text-xl font-bold text-gray-900">Filters</h2>
          </div>
          <button className="text-gray-400 hover:text-blue-600 flex items-center gap-1 text-sm font-medium">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
             </svg>
             Reset
          </button>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-wider">Quick Filters</p>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center px-3 py-1.5 border border-green-100 bg-green-50 text-green-700 rounded-md text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Verified
            </button>
            <button className="flex items-center px-3 py-1.5 border border-blue-100 bg-blue-50 text-blue-700 rounded-md text-xs font-bold">
               <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z"></path></svg>
               New
            </button>
            <button className="flex items-center px-3 py-1.5 border border-red-100 bg-red-50 text-red-700 rounded-md text-xs font-bold">
               <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               Closing
            </button>
          </div>
        </div>

        <FilterGroup title="Academic Level / Program">
          <CheckboxOption label="+2 / Higher Secondary" count={3200} />
          <CheckboxOption label="Bachelor" count={200} />
          <CheckboxOption label="Master" count={200} />
          <CheckboxOption label="Diploma / CTEVT" count={200} />
          <CheckboxOption label="Other" count={200} />
        </FilterGroup>

        <FilterGroup title="Stream / Faculty">
          <div className="relative mb-3">
             <input type="text" placeholder="Filter Fields..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" />
             <div className="absolute left-3 top-2.5">
               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </div>
          </div>
          <CheckboxOption label="Science" count={200} />
          <CheckboxOption label="Management" count={200} />
          <CheckboxOption label="Medical" count={200} />
          <CheckboxOption label="Computer Science" count={200} />
        </FilterGroup>

        <FilterGroup title="Location">
          <select className="w-full p-2 bg-white border border-gray-200 rounded-lg text-sm mb-3">
            <option>All Provinces</option>
          </select>
          <select className="w-full p-2 bg-white border border-gray-200 rounded-lg text-sm">
            <option>District</option>
          </select>
          <div className="mt-3">
            <CheckboxOption label="National Wide" />
          </div>
        </FilterGroup>

        <FilterGroup title="Colleges Type">
           <CheckboxOption label="Government College" count={200} />
           <CheckboxOption label="Private College" count={200} />
           <CheckboxOption label="University-affiliated (TU, KU, PU, Purbanchal)" count={200} />
           <CheckboxOption label="Community" count={200} />
           <CheckboxOption label="CTEVT / Gov. Training Center" count={200} />
        </FilterGroup>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-8 mb-12 shadow-md transition-all">
          Find Scholarship
        </button>
      </div>
    </aside>
  );
};

export default SidebarFilters;
