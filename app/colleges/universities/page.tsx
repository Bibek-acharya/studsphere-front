"use client"
import React, { useState, useMemo } from 'react';
import Hero from '@/components/college/universities/Hero';
import Sidebar from '@/components/college/universities/Sidebar';
import UniversityCard from '@/components/college/universities/UniversityCard';
import Pagination from '@/components/college/universities/Pagination';
import AffiliationTab from '@/components/college/universities/AffiliationTab';
import CollegeListItem from '@/components/college/universities/CollegeListItem';
import { MOCK_UNIVERSITIES, MOCK_COLLEGES } from '@/components/college/universities/Constants';
import { FilterState} from '@/components/college/universities/types';
import { X, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'discovery' | 'colleges'>('discovery');
  const [selectedUniId, setSelectedUniId] = useState<string>('1');
  const [filters, setFilters] = useState<FilterState>({
    affiliation: ['Nepal University'],
    searchQuery: ''
  });

  const handleAffiliationToggle = (val: string) => {
    setFilters(prev => ({
      ...prev,
      affiliation: prev.affiliation.includes(val) 
        ? prev.affiliation.filter(i => i !== val)
        : [...prev.affiliation, val]
    }));
  };

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const resetFilters = () => {
    setFilters({ affiliation: [], searchQuery: '' });
  };

  const goToColleges = (uniId: string) => {
    setSelectedUniId(uniId);
    setView('colleges');
  };

  const filteredUniversities = useMemo(() => {
    return MOCK_UNIVERSITIES.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [filters.searchQuery]);

  const filteredColleges = useMemo(() => {
    return MOCK_COLLEGES.filter(college => college.universityId === selectedUniId);
  }, [selectedUniId]);

  if (view === 'colleges') {
    return (
      <div className="min-h-screen w-full bg-[#fdfdfd] flex flex-col">
        {/* Navigation Bar / Header */}
        <header className="px-6 py-6 max-w-screen-2xl mx-auto w-full">
          <button 
            onClick={() => setView('discovery')}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Discovery</span>
          </button>
          <h1 className="text-2xl font-extrabold text-slate-900">Affiliated Colleges</h1>
        </header>

        {/* Affiliation Tabs Area */}
        <div className="w-full bg-blue-50/40 border-y border-blue-50 py-10 px-6">
          <div className="max-w-screen-2xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {MOCK_UNIVERSITIES.map(uni => (
                <AffiliationTab 
                  key={uni.id} 
                  university={uni} 
                  isActive={selectedUniId === uni.id}
                  onClick={() => setSelectedUniId(uni.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Results Area */}
        <main className="flex-1 container mx-auto px-6 py-12 max-w-screen-2xl">
          <div className="mb-8">
            <p className="text-gray-500 text-sm font-medium">
              Showing {filteredColleges.length * 5} results for colleges and courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Displaying multiples to match the grid density of the screenshot */}
            {Array.from({ length: 5 }).map((_, repeat) => (
              <React.Fragment key={repeat}>
                {filteredColleges.map(college => (
                  <CollegeListItem key={`${college.id}-${repeat}`} college={college} />
                ))}
              </React.Fragment>
            ))}
          </div>

          <Pagination />
        </main>

        
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <Hero onSearch={handleSearch} />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="shrink-0">
            <Sidebar 
              affiliationFilters={filters.affiliation}
              onFilterChange={handleAffiliationToggle}
              onReset={resetFilters}
            />
          </div>

          <div className="flex-1">
            <div className="mb-6 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-gray-400 font-medium text-sm">Active :</span>
                {filters.affiliation.map(f => (
                  <div key={f} className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-1 text-sm text-slate-700 shadow-sm">
                    {f}
                    <button onClick={() => handleAffiliationToggle(f)} className="text-gray-400 hover:text-red-500">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <h4 className="text-slate-900 font-bold text-lg">
                Showing {filteredUniversities.length} results for {filters.searchQuery || 'Scholarship'}
              </h4>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {filteredUniversities.map(uni => (
                <div key={uni.id} onClick={() => goToColleges(uni.id)} className="cursor-pointer">
                  <UniversityCard university={uni} />
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </main>

    </div>
  );
};

export default App;
