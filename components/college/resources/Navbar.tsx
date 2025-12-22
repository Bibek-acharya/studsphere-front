
import React from 'react';

interface NavbarProps {
  onUploadClick: () => void;
  onNotificationClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onUploadClick, onNotificationClick }) => {
  return (
    <nav className=" top-0 w-full z-50 glass-panel h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
            <i className="ph-bold ph-graduation-cap text-xl"></i>
          </div>
          <div className="leading-none">
            <h1 className="font-bold text-lg tracking-tight text-slate-800">StudyFinder</h1>
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Nepal</span>
          </div>
        </a>

        <div className="hidden md:flex relative w-96 mx-4">
          <i className="ph ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
          <input 
            type="text" 
            placeholder="Search resources (e.g., 'Physics Class 11')..." 
            className="w-full pl-11 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Notifications"
            onClick={onNotificationClick}
          >
            <i className="ph ph-bell text-xl"></i>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white animate-pulse"></span>
          </button>
          
          <div className="hidden sm:flex items-center gap-3 pl-1">
            <div className="text-right hidden lg:block">
              <div className="text-xs font-bold text-slate-700">Aarav Shrestha</div>
              <div className="text-[10px] text-secondary font-bold flex items-center justify-end gap-1">
                <i className="ph-fill ph-star"></i> 1,240 pts
              </div>
            </div>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="Profile" 
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
            />
          </div>
          
          <button 
            onClick={onUploadClick}
            className="ml-2 bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
          >
            <i className="ph-bold ph-upload-simple"></i>
            <span className="hidden sm:inline">Upload</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
