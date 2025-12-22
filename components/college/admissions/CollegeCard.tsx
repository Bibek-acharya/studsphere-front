
import React from 'react';
import { College } from './types';
import { STAR_ICON, HEART_ICON } from './Constants';

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full group">
      <div className="p-5 flex flex-col h-full">
        {/* Header: Logo and Basic Info */}
        <div className="flex gap-4 mb-4">
          <div className="w-16 h-16 shrink-0 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
             <img src={college.logo} alt={college.name} className="w-full h-full object-cover" />
          </div>
          <div className="grow">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{college.name}</h3>
            <div className="flex items-center text-gray-500 text-xs mt-1 font-medium">
               <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
               {college.location}
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center text-xs font-bold text-gray-700">
                {STAR_ICON}
                <span className="ml-1">{college.rating} / 5.0</span>
              </div>
              <div className="flex items-center text-[10px] uppercase tracking-wider font-bold text-gray-400">
                <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m0 10V4m-4 6h4m-4 4h4m1 4h1m-7 0h1"></path></svg>
                {college.university}
              </div>
            </div>
          </div>
        </div>

        {/* Programs with Ongoing/Closed buttons */}
        <div className="mb-6 grow">
          <div className="flex items-center justify-between mb-3">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Admission Status</span>
             <span className="text-xs font-bold text-blue-600 underline cursor-pointer">{college.programs.length} Programs</span>
          </div>
          <div className="space-y-2">
            {college.programs.slice(0, 3).map((prog, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-700">{prog.name}</span>
                  <span className="text-[10px] text-gray-400">{prog.level}</span>
                </div>
                <button 
                  className={`text-[10px] font-bold px-3 py-1 rounded-full transition-colors ${
                    prog.status === 'Ongoing' 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {prog.status}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Preview */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
             {college.facilities.slice(0, 3).map((f, idx) => (
               <div key={idx} className="flex items-center text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {f}
               </div>
             ))}
             {college.facilities.length > 3 && (
               <span className="text-[10px] font-bold text-gray-400 self-center">+{college.facilities.length - 3} more</span>
             )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100">
          <button 
            onClick={() => onViewDetails(college)}
            className="flex-1 py-2.5 border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Details
          </button>
          <button className="flex-2 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
            Inquiry Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <button className="p-2.5 border border-gray-200 text-gray-400 hover:text-red-500 rounded-xl transition-colors">
            {HEART_ICON}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
