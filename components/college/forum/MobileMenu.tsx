
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose}></div>
        <div className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <i className="ph-bold ph-student text-lg"></i>
                    </div>
                    <span className="text-lg font-bold text-slate-900">StudSphere</span>
                </div>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-2"><i className="ph-bold ph-x text-xl"></i></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50/50 border border-blue-100 rounded-xl">
                     <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" className="w-10 h-10 rounded-full border border-white bg-white shadow-sm" alt="User" />
                     <div>
                        <div className="font-bold text-slate-800 text-sm">Guest User</div>
                        <div className="text-xs text-primary font-medium cursor-pointer hover:underline">Log in to post updates</div>
                     </div>
                </div>
                <nav className="space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-primary font-semibold bg-blue-50 rounded-lg">
                        <i className="ph-fill ph-house text-lg"></i> Home
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg">
                        <i className="ph-fill ph-newspaper text-lg text-slate-400"></i> Notices & News
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg">
                        <i className="ph-fill ph-buildings text-lg text-slate-400"></i> Colleges/Universities
                    </a>
                </nav>
                <div className="text-xs text-slate-400 pt-4">Categories are also available in the desktop view.</div>
            </div>
            <div className="p-5 border-t border-slate-100 bg-slate-50">
                <button className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98]">Sign In / Register</button>
            </div>
        </div>
    </div>
  );
};

export default MobileMenu;
