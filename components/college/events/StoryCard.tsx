
import React from 'react';
import { Calendar, MapPin, Building2, Heart } from 'lucide-react';
import { ScholarshipStory } from './types';

interface StoryCardProps {
  story: ScholarshipStory;
  onViewDetails: (id: string) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onViewDetails }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Seminar & Workshop': return 'bg-teal-600';
      case 'Career Fairs': return 'bg-orange-500';
      case 'Competitions': return 'bg-blue-600';
      default: return 'bg-blue-600';
    }
  };

  const isSeminar = story.category === 'Seminar & Workshop';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
      <div 
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(story.id)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className={`${getCategoryColor(story.category)} text-white text-[10px] uppercase px-2 py-1 rounded font-bold`}>
            {story.category}
          </span>
          <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-medium uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>{story.date}</span>
          </div>
        </div>
        <h4 
          className={`text-lg font-bold mb-4 leading-tight cursor-pointer hover:underline decoration-2 underline-offset-4 ${isSeminar ? 'text-blue-600' : 'text-black'}`}
          onClick={() => onViewDetails(story.id)}
        >
          {story.title}
        </h4>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
            <Building2 className="w-4 h-4 text-gray-400" />
            <span className="truncate">{story.academy}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="truncate">{story.location}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-6 line-clamp-3">
          {story.description}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <button 
            onClick={() => onViewDetails(story.id)}
            className="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Details
          </button>
          <button className={`flex-2 py-2.5 text-white text-sm font-bold rounded-lg transition-colors ${isSeminar ? 'bg-blue-500 hover:bg-blue-600' : 'bg-slate-900 hover:bg-black'}`}>
            Register Now
          </button>
          <button className="p-2.5 border border-gray-200 text-gray-400 rounded-lg hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};