
import React from 'react';
import { Heart, Building2, BookOpen, ArrowRight } from 'lucide-react';
import { Exam } from './types';

interface ExamCardProps {
  exam: Exam;
  onViewDetails: (id: string) => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, onViewDetails }) => {
  const isOngoing = exam.status === 'Ongoing';

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="relative h-48 sm:h-56 overflow-hidden cursor-pointer" onClick={() => onViewDetails(exam.id)}>
        <img 
          src={exam.imageUrl} 
          alt={exam.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4">
          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold ${
            isOngoing 
              ? 'bg-emerald-50 text-emerald-600' 
              : 'bg-red-50 text-red-600'
          }`}>
            <span className={`w-2 h-2 rounded-full mr-2 ${isOngoing ? 'bg-emerald-500' : 'bg-red-500'}`} />
            {exam.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => onViewDetails(exam.id)}>
          {exam.title}
        </h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-slate-600 gap-2 text-sm font-medium">
            <Building2 className="w-4 h-4 text-blue-500" />
            <span>{exam.university}</span>
          </div>
          <div className="flex items-center text-slate-600 gap-2 text-sm font-medium">
            <BookOpen className="w-4 h-4 text-blue-500" />
            <span>{exam.faculty}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Exam Date</p>
            <p className="text-sm font-bold text-slate-900">{exam.examDate}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Nepali Date</p>
            <p className="text-sm font-bold text-slate-900">{exam.nepaliDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => onViewDetails(exam.id)}
            className="flex-1 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-3 rounded-xl transition-all text-sm"
          >
            Details
          </button>
          <button className="flex-[1.5] bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn text-sm">
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center border border-slate-200 rounded-xl hover:bg-slate-50 transition-all group/heart">
            <Heart className="w-5 h-5 text-slate-400 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
