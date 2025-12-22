
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-20">
      <button className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:border-slate-400 transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-lg shadow-md shadow-blue-500/20">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors">
        3
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:border-slate-400 transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
