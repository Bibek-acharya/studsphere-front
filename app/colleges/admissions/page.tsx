"use client";
import React, { useState } from 'react';
import Hero from '@/components/college/admissions/Hero';
import SidebarFilters from '@/components/college/admissions/Sidebar';
import CollegeCard from '@/components/college/admissions/CollegeCard';

import AdmissionDetails from '@/components/college/admissions/AdmissionDetails';
import { COLLEGES } from '@/components/college/admissions/Constants';
import { College } from '@/components/college/admissions/types';

const App: React.FC = () => {
  const [view, setView] = useState<'search' | 'details'>('search');
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);

  const handleViewDetails = (college: College) => {
    setSelectedCollege(college);
    setView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('search');
    setSelectedCollege(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get colleges that are not the current one
  const getRelatedColleges = (currentId: string) => {
    return COLLEGES.filter(c => c.id !== currentId).slice(0, 4);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      

      {view === 'search' ? (
        <>
          {/* Hero Section */}
          <Hero />

          {/* Main Content Area */}
          <div className="flex flex-1 max-w-[1440px] mx-auto w-full">
            {/* Filters Sidebar */}
            <SidebarFilters />

            {/* Results Grid */}
            <main className="grow p-6">
              {/* Active Filters Display */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold text-gray-400">Active :</span>
                  <div className="flex gap-2">
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-[10px] font-bold text-gray-600 flex items-center gap-2">
                      Bachelor <button className="hover:text-red-500 font-bold">×</button>
                    </span>
                    <button className="text-[10px] font-bold text-blue-600 ml-2">Clear All</button>
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-700">Showing {COLLEGES.length} results for University</p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {COLLEGES.slice(0, 4).map((college) => (
                  <CollegeCard 
                    key={college.id} 
                    college={college} 
                    onViewDetails={handleViewDetails} 
                  />
                ))}

                {/* In-feed Banner */}
                <div className="col-span-1 xl:col-span-2 rounded-2xl overflow-hidden shadow-lg my-4 relative h-64 group cursor-pointer">
                   <img 
                     src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1200&h=400" 
                     alt="Admission Open" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center p-12 text-white">
                      <span className="inline-block px-3 py-1 bg-blue-600 rounded text-[10px] font-black tracking-widest mb-4 uppercase">Sponsored</span>
                      <h2 className="text-4xl font-black mb-2 tracking-tight">ADMISSION OPEN 2024</h2>
                      <p className="text-xl font-bold text-blue-400 mb-6 uppercase">Leading Technology Institute</p>
                      <div className="flex gap-4">
                        <span className="px-6 py-2.5 bg-white text-black font-black text-sm rounded-xl">Inquiry Now</span>
                        <span className="px-6 py-2.5 bg-blue-600 text-white font-black text-sm rounded-xl hover:bg-blue-700 transition-colors">View Details</span>
                      </div>
                   </div>
                </div>

                {COLLEGES.slice(4, 8).map((college) => (
                  <CollegeCard 
                    key={college.id} 
                    college={college} 
                    onViewDetails={handleViewDetails} 
                  />
                ))}
              </div>

              {/* Pagination */}
    
            </main>
          </div>
        </>
      ) : (
        selectedCollege && (
          <AdmissionDetails 
            college={selectedCollege} 
            relatedColleges={getRelatedColleges(selectedCollege.id)}
            onBack={handleBack} 
            onViewDetails={handleViewDetails}
          />
        )
      )}

      {/* Footer */}
      
    </div>
  );
};

export default App;
