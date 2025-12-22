
import React, { useState, } from 'react';

interface HeaderProps {
  toggleMobileMenu: () => void;
  openPostModal: () => void;
  addToast: (msg: string, type?: unknown) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu, openPostModal, addToast }) => {
  const [showNotif, setShowNotif] = useState(false);
  const [hasNewNotif, setHasNewNotif] = useState(true);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = (e.target as HTMLInputElement).value;
      addToast(`Searching for "${val}"...`, 'info');
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <header className="bg-surface border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4 lg:px-6 h-18 flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
                <button 
                  onClick={toggleMobileMenu}
                  className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors active:scale-95"
                >
                    <i className="ph ph-list text-2xl"></i>
                </button>
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-10 h-10 bg-linear-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/40 group-hover:scale-105 transition-transform duration-300">
                        <i className="ph-bold ph-student text-2xl"></i>
                    </div>
                    <div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight leading-none block">StudSphere</span>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Nepali Student Network</span>
                    </div>
                </a>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i className="ph ph-magnifying-glass text-slate-400 text-lg group-focus-within:text-primary transition-colors"></i>
                </div>
                <input 
                  type="text" 
                  onKeyDown={handleSearch}
                  placeholder="Search TU, KU, Lok Sewa, or courses..." 
                  className="w-full pl-11 pr-14 py-2.5 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm transition-all shadow-sm outline-none"
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                    <span className="text-xs text-slate-400 bg-white border border-slate-200 rounded px-1.5 py-0.5 shadow-sm hidden lg:block select-none pointer-events-none">Ctrl + K</span>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button 
                  onClick={openPostModal}
                  className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-primary hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold text-sm transition-all active:scale-95 border border-transparent hover:border-primary/20"
                >
                    <i className="ph ph-pencil-simple text-lg"></i>
                    <span>Ask/Share</span>
                </button>
                
                <div className="w-px h-8 bg-slate-200 mx-1 hidden sm:block"></div>

                <div className="relative">
                    <button 
                      onClick={() => { setShowNotif(!showNotif); setHasNewNotif(false); }}
                      className="relative p-2 text-slate-500 hover:text-primary hover:bg-slate-100 rounded-full transition-colors active:bg-slate-200"
                    >
                        <i className="ph ph-bell text-xl"></i>
                        {hasNewNotif && <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>}
                    </button>
                    
                    {showNotif && (
                      <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in origin-top-right z-50">
                        <div className="p-3 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                            <span className="font-bold text-sm">Notifications</span>
                            <button className="text-[10px] text-primary font-bold hover:underline">Mark all read</button>
                        </div>
                        <div className="max-h-64 overflow-y-auto custom-scroll">
                            <div className="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50">
                                <p className="text-xs text-slate-700"><span className="font-bold">Aastha</span> replied to your post.</p>
                                <span className="text-[10px] text-slate-400">2 min ago</span>
                            </div>
                            <div className="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50">
                                <p className="text-xs text-slate-700">Your post reached <span className="font-bold">100 Upvotes</span>!</p>
                                <span className="text-[10px] text-slate-400">1 hour ago</span>
                            </div>
                        </div>
                      </div>
                    )}
                </div>
                
                <button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all bg-white ml-2 active:scale-95">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="User" className="w-8 h-8 rounded-full bg-slate-100" />
                    <i className="ph ph-caret-down text-slate-400 mr-1"></i>
                </button>
            </div>
        </div>
        
        <div className="md:hidden px-4 pb-3">
            <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search TU, KU, Lok Sewa..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  onKeyDown={handleSearch}
                />
                <i className="ph ph-magnifying-glass absolute left-3 top-2.5 text-slate-400"></i>
            </div>
        </div>
    </header>
  );
};

export default Header;
