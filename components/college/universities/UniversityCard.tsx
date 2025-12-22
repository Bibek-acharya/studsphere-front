
import React from 'react';
import { Star, MapPin, Building2, BookOpen, Heart } from 'lucide-react';
import { University } from './types';

interface UniversityCardProps {
  university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100 flex flex-col gap-6 hover:shadow-md transition-all">
      {/* Header Info */}
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
          <img src={university.logo} alt={university.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">{university.name}</h2>
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
            <MapPin size={14} className="text-blue-500" />
            <span>{university.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-blue-500 fill-blue-500" />
              <span className="font-bold text-slate-900">{university.rating.toFixed(1)} / 5.0</span>
            </div>
            <div className="flex items-center gap-1 border-l pl-4 border-gray-200">
              <Building2 size={16} className="text-blue-500" />
              <span className="text-gray-600 font-medium">{university.type}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
              Rank #{university.rank}
            </span>
            {university.isPopular && (
              <span className="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-100">
                Popular
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stats Divider */}
      <div className="grid grid-cols-2 border-y border-gray-100 py-6 my-2">
        <div className="flex items-center justify-center gap-4 border-r border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
            <BookOpen size={20} className="text-slate-600" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">{university.programsCount}</div>
            <div className="text-gray-400 text-sm">Programs</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
            <Building2 size={20} className="text-slate-600" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">{university.collegesCount}</div>
            <div className="text-gray-400 text-sm">Colleges</div>
          </div>
        </div>
      </div>

      {/* Popular Programs */}
      <div>
        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Popular</h3>
        <div className="flex flex-wrap gap-2">
          {university.popularPrograms.map((program, idx) => (
            <span key={idx} className="bg-slate-50 text-slate-600 text-sm px-4 py-1.5 rounded-full border border-slate-100">
              {program}
            </span>
          ))}
          <span className="text-slate-400 text-sm font-medium px-4 py-1.5">+More</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto">
        <button className="flex-1 border border-gray-200 hover:bg-gray-50 text-slate-700 font-semibold py-3 rounded-xl transition-all">
          Details
        </button>
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-sm">
          View Colleges
        </button>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className={`w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl transition-all ${isFavorite ? 'bg-red-50 border-red-100' : 'hover:bg-gray-50'}`}
        >
          <Heart size={20} className={`${isFavorite ? 'text-red-500 fill-red-500' : 'text-slate-400'}`} />
        </button>
      </div>
    </div>
  );
};

export default UniversityCard;
