
import React from 'react';
import { College } from './types';
import { StarIcon, LocationIcon, FacultyIcon } from './Icons';

interface CollegeCardProps {
  college: College;
  isSelected: boolean;
  onToggleCompare: (id: number) => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college, isSelected, onToggleCompare }) => {
  const getRankStyles = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-br from-amber-400 to-orange-600';
    if (rank === 2) return 'bg-gradient-to-br from-slate-300 to-slate-600';
    if (rank === 3) return 'bg-gradient-to-br from-stone-300 to-amber-900';
    return 'bg-gradient-to-br from-indigo-500 to-indigo-800';
  };

  return (
    <div className="relative bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-5 animate-fade-in group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
      
      {/* Rank Ribbon */}
      <div className={`absolute -top-px left-5 w-8 h-9 ${getRankStyles(college.rank)} rank-badge-shape z-10 flex items-start justify-center pt-1.5 text-white font-extrabold text-[11px]`}>
        {college.rank}
      </div>

      {/* Logo & Year Section */}
      <div className="flex flex-col items-center sm:items-start shrink-0 pt-3 gap-3">
        <div className={`w-16 h-16 rounded-xl ${college.color} flex items-center justify-center text-white font-bold text-xl shadow-md ring-4 ring-slate-50`}>
          {college.logo}
        </div>
        
        {/* YEAR SQUARE FRAME */}
        <div className="w-16 h-14 border border-slate-200 rounded-xl flex flex-col items-center justify-center bg-slate-50 text-slate-600 shadow-inner">
          <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">Year</span>
          <span className="text-sm font-extrabold text-slate-800">{college.stats.year}</span>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 pt-1 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2 gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition leading-tight">{college.name}</h3>
            <p className="text-xs text-slate-400 mt-1 font-medium flex items-center justify-center sm:justify-start gap-1">
              <LocationIcon />
              {college.location}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <StarIcon />
            <span className="text-slate-700 font-bold text-sm">{college.stats.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-3">
          {college.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-wider border border-slate-100">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
          {college.desc}
        </p>

        {/* Faculty Only Footer */}
        <div className="flex items-center justify-start pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 bg-indigo-50/50 px-3 py-1.5 rounded-lg border border-indigo-100">
             <div className="p-1 bg-white rounded-md text-indigo-600 shadow-sm">
                <FacultyIcon />
             </div>
             <div>
                <p className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-0.5">Faculty</p>
                <p className="text-xs font-bold text-slate-700 leading-none">{college.stats.faculty}</p>
             </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-row sm:flex-col gap-2 justify-center border-t sm:border-t-0 sm:border-l border-slate-50 pt-4 sm:pt-0 sm:pl-5 sm:w-36 shrink-0">
        <button className="flex-1 sm:flex-none w-full py-2.5 px-3 bg-white border border-slate-200 text-slate-600 font-bold text-xs rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition">
          View Details
        </button>
        <button 
          onClick={() => onToggleCompare(college.id)}
          className={`flex-1 sm:flex-none w-full py-2.5 px-3 font-bold text-xs rounded-lg transition flex items-center justify-center gap-1.5 shadow-sm
          ${isSelected ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
          {isSelected ? '✓ Added' : '+ Compare'}
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
