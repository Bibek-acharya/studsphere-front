"use client";
import React, { useState, useMemo } from 'react';
import { SearchHero } from '@/components/college/events/SearchHero';
import { CategoryFilter } from '@/components/college/events/CategoryFilter';
import { FeaturedSection } from '@/components/college/events/FeaturedSection';
import { LatestStories } from '@/components/college/events/LatestStories';
import { MOCK_STORIES } from '@/components/college/events/Constant';
import { Category } from '@/components/college/events/types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All News');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = useMemo(() => {
    return MOCK_STORIES.filter(story => {
      const matchesCategory = activeCategory === 'All News' || story.category === activeCategory;
      const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           story.academy.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main>
        <SearchHero onSearch={setSearchQuery} />
        
        <CategoryFilter 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />
        
        <FeaturedSection />
        
        <LatestStories stories={filteredStories} />
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Nepal Scholarship Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
