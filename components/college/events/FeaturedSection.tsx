
import React from 'react';
import { Clock } from 'lucide-react';
import { FEATURED_STORY } from './Constant';

export const FeaturedSection: React.FC = () => {
  return (
    <section className="px-4 max-w-7xl mx-auto mb-20">
      <h3 className="text-2xl font-bold text-black mb-6">Featured Story of the Week</h3>
      <div 
        className="relative h-[450px] w-full rounded-3xl overflow-hidden group cursor-pointer"
        style={{
          backgroundImage: `url(${FEATURED_STORY.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-md font-bold">
                Featured
              </span>
              <div className="flex items-center gap-1.5 text-white text-sm">
                <Clock className="w-4 h-4" />
                <span>{FEATURED_STORY.daysAgo}</span>
              </div>
            </div>
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {FEATURED_STORY.title}
            </h4>
            <p className="text-gray-200 text-lg">
              {FEATURED_STORY.subtitle}
            </p>
          </div>
          
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors whitespace-nowrap shadow-lg">
            Read Full Story
          </button>
        </div>
      </div>
    </section>
  );
};
