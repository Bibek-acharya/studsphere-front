
import React from 'react';
import { CATEGORIES } from './Constant';
import { Category } from './types';

interface CategoryFilterProps {
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onSelect }) => {
  return (
    <section className="px-4 max-w-7xl mx-auto mb-12">
      <h3 className="text-2xl font-bold text-black mb-6">Browse by category</h3>
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-100 hover:border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};
