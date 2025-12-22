
import React from 'react';

interface HeroProps {
  onUploadClick: () => void;
  onBrowseClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onUploadClick, onBrowseClick }) => {
  return (
    <div className="rounded-3xl bg-linear-to-br from-indigo-900 via-blue-900 to-slate-900 p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wider uppercase bg-white/10 rounded-full backdrop-blur-sm border border-white/10 text-blue-200">
            🚀 The #1 Student Community
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Elevate Your Grades with <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-teal-200">Verified Resources</span>
          </h2>
          <p className="text-blue-100/80 text-sm mb-8 leading-relaxed max-w-md">
            Access thousands of notes, summaries, and past questions from TU, KU, PU, and NEB. Join 5,000+ students sharing knowledge today.
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={onBrowseClick}
              className="px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl text-sm font-bold transition-all shadow-lg shadow-white/10"
            >
              Browse Materials
            </button>
            <button 
              onClick={onUploadClick}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 border border-blue-500/50 rounded-xl text-sm font-bold transition-all flex items-center gap-2 backdrop-blur-sm shadow-lg group"
            >
              <i className="ph-bold ph-upload-simple group-hover:-translate-y-0.5 transition-transform"></i> Upload Resource
            </button>
          </div>
        </div>
        
        <div className="hidden md:block relative">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                <i className="ph-bold ph-check"></i>
              </div>
              <div>
                <div className="text-xs text-blue-200 font-medium">Daily Uploads</div>
                <div className="text-xl font-bold text-white">+142</div>
              </div>
            </div>
            <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
