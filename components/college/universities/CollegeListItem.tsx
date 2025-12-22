
import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { College } from './types';

interface CollegeListItemProps {
  college: College;
}

const CollegeListItem: React.FC<CollegeListItemProps> = ({ college }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="w-16 h-16 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center p-2 shrink-0">
        <img src={college.logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-slate-900 font-bold text-base leading-tight mb-1">{college.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-blue-500 fill-blue-500" />
            <span className="text-sm font-bold text-slate-700">{college.rating}</span>
          </div>
          <span className="text-xs text-gray-400 font-medium">{college.reviews} reviews</span>
        </div>
        
        <div className="flex gap-2">
          <span className="bg-slate-50 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100">
            {college.affiliation}
          </span>
          <span className="bg-slate-50 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100">
            {college.type}
          </span>
        </div>
      </div>
      
      <div className="text-gray-300 group-hover:text-blue-500 transition-colors">
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

export default CollegeListItem;
