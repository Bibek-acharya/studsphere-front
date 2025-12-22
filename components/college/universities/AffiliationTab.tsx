
import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { University } from './types';

interface AffiliationTabProps {
  university: University;
  isActive: boolean;
  onClick: () => void;
}

const AffiliationTab: React.FC<AffiliationTabProps> = ({ university, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative flex-1 min-w-[200px] cursor-pointer p-5 rounded-xl border transition-all duration-200 ${
        isActive 
        ? 'bg-white border-blue-500 shadow-sm' 
        : 'bg-white border-transparent hover:border-gray-200'
      }`}
    >
      {isActive && (
        <div className="absolute top-3 right-3 text-blue-500">
          <CheckCircle2 size={18} fill="currentColor" stroke="white" />
        </div>
      )}
      <h3 className="text-slate-900 font-bold text-sm mb-1">{university.name}</h3>
      <div className="flex items-center gap-1 text-blue-500 text-xs font-medium">
        <span>{university.collegesCount} colleges</span>
        <ChevronRight size={14} />
      </div>
    </div>
  );
};

export default AffiliationTab;
