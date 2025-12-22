"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import SearchHero from '@/components/college/entrance/SearchHero';
import Sidebar from '@/components/college/entrance/Sidebar';
import ExamCard from '@/components/college/entrance/ExamCard';
import ExamDetails from '@/components/college/entrance/ExamDetails';
import Pagination from '@/components/college/entrance/Pagination';
import { MOCK_EXAMS } from '@/components/college/entrance/Constant';

const App: React.FC = () => {
  const [view, setView] = useState<'list' | 'details'>('list');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedExam = MOCK_EXAMS.find(e => e.id === selectedId) || MOCK_EXAMS[0];

  const handleViewDetails = (id: string) => {
    setSelectedId(id);
    setView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/50">

      {/* Main Container - Full Screen Width */}
      <main className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-8">
        {view === 'list' ? (
          <>
            <SearchHero />
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Sidebar */}
              <aside className="w-full lg:w-[350px] shrink-0">
                <Sidebar onReset={() => console.log('reset')} />
              </aside>

              {/* Results Area */}
              <div className="grow">
                {/* Active Filters Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-bold text-slate-400 mr-2 uppercase tracking-wide">Active:</span>
                    <span className="inline-flex items-center bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                      Bachelor <X className="w-3 h-3 ml-2 cursor-pointer text-slate-400 hover:text-slate-600" />
                    </span>
                    <span className="inline-flex items-center bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                      TU <X className="w-3 h-3 ml-2 cursor-pointer text-slate-400 hover:text-slate-600" />
                    </span>
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline px-2 transition-all">Clear All</button>
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    Showing <span className="text-slate-900 font-bold">100</span> results for colleges and courses
                  </p>
                </div>

                {/* Grid of Results - Now 2 columns on large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10">
                  {MOCK_EXAMS.map(exam => (
                    <ExamCard key={exam.id} exam={exam} onViewDetails={handleViewDetails} />
                  ))}
                </div>

                <Pagination />
              </div>
            </div>
          </>
        ) : (
          <ExamDetails 
            exam={selectedExam} 
            onBack={handleBack} 
            onRelatedClick={handleViewDetails}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">U</div>
            <span className="text-xl font-bold tracking-tight">EduPortal</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">© 2024 EduPortal Nepal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
