"use client";
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/college/resources/Navbar';
import Sidebar from '@/components/college/resources/Sidebar';
import Hero from '@/components/college/resources/Hero';
import FilterEngine from '@/components/college/resources/FilterEngine';
import ResourceCard from '@/components/college/resources/ResourceCard';
import PreviewModal from '@/components/college/resources/PreviewModal';
import UploadModal from '@/components/college/resources/UploadModal';
import { RESOURCE_DATA } from '@/components/college/resources/Constant';
import {  ResourceType } from '@/components/college/resources/types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ResourceType>('all');
  const [ setFilters] = useState({
    university: '',
    level: '',
    faculty: '',
    program: '',
    year: '',
    semester: '',
    subject: ''
  });
  const [selectedResourceId, setSelectedResourceId] = useState<number | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const filteredResources = useMemo(() => {
    let result = [...RESOURCE_DATA];
    
    if (activeTab !== 'all') {
      result = result.filter(r => r.type === activeTab);
    }
    
    // Sort to show newer items (like id 7) first
    return result.sort((a, b) => b.id - a.id);
  }, [activeTab]);

  const selectedResource = useMemo(() => 
    RESOURCE_DATA.find(r => r.id === selectedResourceId) || null
  , [selectedResourceId]);

  const tabs: { label: string; value: ResourceType }[] = [
    { label: 'All Resources', value: 'all' },
    { label: 'Notes & Summary', value: 'notes' },
    { label: 'Syllabus', value: 'syllabus' },
    { label: 'Books & PDF', value: 'books' },
    { label: 'Solutions', value: 'solutions' },
    { label: 'Study Guides', value: 'guides' },
  ];

  const handleBrowseClick = () => {
    document.getElementById('filter-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bgLight text-slate-800">
      <Navbar onUploadClick={() => setIsUploadModalOpen(true)} />
      
      <main className="container mx-auto px-4 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Sidebar />

        <div className="lg:col-span-9 space-y-6">
          <Hero 
            onUploadClick={() => setIsUploadModalOpen(true)} 
            onBrowseClick={handleBrowseClick} 
          />
          
          <FilterEngine 
            onFilterChange={(newFilters) => setFilters(newFilters)}
            onReset={() => setFilters({ university: '', level: '', faculty: '', program: '', year: '', semester: '', subject: '' })}
          />

          <div className="space-y-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {tabs.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all active:scale-95 shadow-sm
                    ${activeTab === tab.value 
                      ? 'bg-slate-800 text-white shadow-md' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredResources.length > 0 ? (
                filteredResources.map(resource => (
                  <ResourceCard 
                    key={resource.id} 
                    resource={resource} 
                    onPreview={setSelectedResourceId} 
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-slate-400">
                  No resources found for this category.
                </div>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all flex items-center gap-2 group">
                Load More Resources <i className="ph-bold ph-caret-down group-hover:translate-y-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </main>

      {selectedResourceId && (
        <PreviewModal 
          resource={selectedResource} 
          onClose={() => setSelectedResourceId(null)} 
        />
      )}

      {isUploadModalOpen && (
        <UploadModal onClose={() => setIsUploadModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
