"use client";
import React, { useState, useMemo} from 'react';
import { COLLEGES, MAX_SELECTION } from '@/components/college/rankings/Constants';
import {  SortOption, FilterOption } from '@/components/college/rankings/types';
import CollegeCard from '@/components/college/rankings/CollegeCard';
import ComparisonModal from '@/components/college/rankings/ComparisionModal';
import { SearchIcon, FilterIcon, CloseIcon } from '@/components/college/rankings/Icons';

const App: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const [sortBy, setSortBy] = useState<SortOption>('RANK_DESC');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCompare = (id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(i => i !== id);
      }
      if (prev.length >= MAX_SELECTION) {
        alert(`You can only compare up to ${MAX_SELECTION} colleges at once.`);
        return prev;
      }
      return [...prev, id];
    });
  };

  const filteredAndSortedColleges = useMemo(() => {
    let result = [...COLLEGES];

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) || 
        c.location.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Filter
    if (activeFilter !== 'All') {
      result = result.filter(c => c.tags.includes(activeFilter));
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'RANK_DESC': return a.rank - b.rank;
        case 'YEAR_DESC': return parseInt(b.stats.year) - parseInt(a.stats.year);
        case 'RATING_DESC': return b.stats.rating - a.stats.rating;
        default: return 0;
      }
    });

    return result;
  }, [searchQuery, activeFilter, sortBy]);

  const selectedColleges = useMemo(() => 
    COLLEGES.filter(c => selectedIds.includes(c.id)),
  [selectedIds]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-25"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>

        <div className="relative w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
          

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Updated for 2026 Intake
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              The Gold Standard of <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">College Rankings</span> in Nepal
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed px-4">
              Data-driven insights on faculty excellence, academic quality, and student satisfaction across all campuses.
            </p>
            
            <div className="max-w-2xl mx-auto relative z-10">
              <div className="relative bg-white rounded-2xl shadow-xl shadow-indigo-100/50 flex items-center p-2 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/20 transition-all duration-300">
                <div className="pl-4 text-slate-400"><SearchIcon /></div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find colleges, courses, or locations..." 
                  className="w-full p-3.5 text-base text-slate-700 focus:outline-none bg-transparent placeholder:text-slate-400"
                />
                <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-slate-800 transition active:scale-95">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="w-full px-4 sm:px-8 lg:px-12 py-3">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 border-r border-slate-200 pr-4 shrink-0">
              <div className="p-1.5 bg-slate-100 rounded-md text-slate-500">
                <FilterIcon />
              </div>
            </div>
            
            {(['All', 'Science & Tech', 'Management', 'Medical', 'Humanities'] as FilterOption[]).map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border tracking-wide transition-all
                  ${activeFilter === filter 
                    ? 'bg-slate-900 text-white border-transparent' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                {filter}
              </button>
            ))}
            
            <div className="flex-1"></div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-medium text-slate-400 hidden sm:block">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer hover:text-indigo-600 transition py-1"
              >
                <option value="RANK_DESC">🏆 Rank High-Low</option>
                <option value="YEAR_DESC">📅 Year New-Old</option>
                <option value="RATING_DESC">⭐ Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* List Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                Top Ranked Institutions
                <span className="bg-slate-100 text-slate-600 text-xs py-0.5 px-2 rounded-full">
                  {filteredAndSortedColleges.length}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {filteredAndSortedColleges.map(college => (
                <CollegeCard 
                  key={college.id} 
                  college={college} 
                  isSelected={selectedIds.includes(college.id)}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </div>
            
            {filteredAndSortedColleges.length === 0 && (
              <div className="py-20 text-center bg-white rounded-3xl border border-slate-100 border-dashed">
                <p className="text-slate-400 font-medium">No results found for your search criteria.</p>
                <button onClick={() => {setSearchQuery(''); setActiveFilter('All');}} className="mt-4 text-indigo-600 font-bold text-sm">Clear all filters</button>
              </div>
            )}
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition w-full sm:w-auto">
                Load More Colleges
              </button>
            </div>
          </div>

          {/* Sidebar Comparison (Desktop) */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden ring-1 ring-slate-100">
                <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    Compare
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Select up to 3 colleges to compare.</p>
                </div>
                
                <div className="p-2 space-y-1 min-h-[120px]">
                  {selectedIds.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center opacity-50">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                      </div>
                      <p className="text-xs font-medium text-slate-500">Add colleges to compare</p>
                    </div>
                  ) : (
                    selectedColleges.map(c => (
                      <div key={c.id} className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-sm animate-fade-in group hover:border-indigo-100">
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <div className={`w-6 h-6 rounded ${c.color} flex items-center justify-center text-white text-[9px] font-bold shrink-0 shadow-sm`}>{c.logo}</div>
                          <span className="text-xs font-semibold text-slate-700 truncate">{c.name}</span>
                        </div>
                        <button onClick={() => toggleCompare(c.id)} className="text-slate-300 hover:text-rose-500 transition">
                          <CloseIcon />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50/30">
                  <button 
                    disabled={selectedIds.length < 2}
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 bg-slate-900 text-white font-bold text-sm rounded-xl shadow-lg shadow-slate-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-[0.98]"
                  >
                    {selectedIds.length < 2 ? `Add ${2 - selectedIds.length} more` : `Compare (${selectedIds.length})`}
                  </button>
                </div>
              </div>
              
              <div className="mt-6 p-5 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-100 uppercase tracking-wide">Faculty Spotlight</span>
                    <p className="text-sm font-medium mt-1 mb-3">Meet the professors changing the industry.</p>
                    <a href="#" className="text-xs font-bold bg-white text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition inline-block">View Profiles</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile Comparison Floating Bar */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-4 right-4 z-40 lg:hidden transform translate-y-0 transition-transform duration-500 animate-fade-in">
          <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between border border-white/10">
            <div className="flex flex-col">
              <span className="text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{selectedIds.length} Selected</span>
              </span>
              <span className="text-xs text-slate-400">View side-by-side comparison</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-sm transition shadow-lg shadow-indigo-500/30"
            >
              Compare
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <ComparisonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedColleges={selectedColleges} 
      />
    </div>
  );
};

export default App;
