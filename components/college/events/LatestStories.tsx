
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { StoryCard } from './StoryCard';
import { useRouter } from 'next/navigation';
import { ScholarshipStory, SortOption } from './types';

interface LatestStoriesProps {
  stories: ScholarshipStory[];
}

export const LatestStories: React.FC<LatestStoriesProps> = ({ stories }) => {
  const [sortBy] = useState<SortOption>('Newest First');
  const router = useRouter();

  const handleViewDetails = (id: string) => {
    router.push(`/colleges/events/${id}`);
  };

  return (
    <section className="px-4 max-w-7xl mx-auto mb-20">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-black">Latest News & stories</h3>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">Sort by:</span>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            {sortBy}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </section>
  );
};
