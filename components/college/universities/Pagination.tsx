
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-12">
      <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-500">
        <ChevronLeft size={20} />
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-md shadow-blue-100">
        1
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600 font-medium">
        2
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600 font-medium">
        3
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-500">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
