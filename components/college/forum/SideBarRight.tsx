
import React, { useState } from 'react';

interface SidebarRightProps {
  addToast: (msg: string, type?: any) => void;
}

const SidebarRight: React.FC<SidebarRightProps> = ({ addToast }) => {
  const [following, setFollowing] = useState<Record<string, boolean>>({ 'Rohan': true, 'Priya': false });

  const toggleFollow = (name: string) => {
    setFollowing(prev => {
      const isFollowing = !prev[name];
      if (isFollowing) addToast(`You are now following ${name}`, 'success');
      return { ...prev, [name]: isFollowing };
    });
  };

  return (
    <aside className="hidden lg:block col-span-3 sticky top-24 space-y-6">
      <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-extrabold text-slate-800 text-sm tracking-tight">LATEST UNIVERSITY NOTICES</h3>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        </div>
        <div className="divide-y divide-slate-50">
            <a href="#" className="block p-4 hover:bg-slate-50 transition-colors group">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded">TU</span>
                    <span className="text-[10px] text-slate-400">1h ago</span>
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed group-hover:text-primary transition-colors">BBA 8th Semester Exam Form Fill-up Notice</p>
            </a>
            <a href="#" className="block p-4 hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">KU</span>
                    <span className="text-[10px] text-slate-400">3h ago</span>
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed group-hover:text-primary transition-colors">KU Engineering Admission List for 2024 published.</p>
            </a>
        </div>
        <a href="#" className="block text-center py-3 text-xs font-bold text-primary bg-slate-50 hover:bg-slate-100 border-t border-slate-100 transition-colors">
            View All Notices <i className="ph-bold ph-arrow-right ml-1"></i>
        </a>
      </div>

      <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-5">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-extrabold text-slate-800 text-sm">TOP CONTRIBUTORS</h3>
            <a href="#" className="text-[10px] text-primary font-bold hover:underline">VIEW LEADERBOARD</a>
        </div>
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Bob" className="w-9 h-9 rounded-full bg-slate-100 border border-slate-100" />
                    <div className="absolute -top-1 -left-1 text-yellow-500 drop-shadow-sm"><i className="ph-fill ph-crown text-sm"></i></div>
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-slate-800 truncate">Rohan Das</h4>
                    <div className="flex items-center gap-1">
                        <i className="ph-fill ph-star text-yellow-400 text-[10px]"></i>
                        <span className="text-[10px] text-slate-500 font-medium">1.2k Rep</span>
                    </div>
                </div>
                <button 
                  onClick={() => toggleFollow('Rohan')}
                  className={`text-xs font-bold px-2 py-1 rounded transition-colors ${following['Rohan'] ? 'bg-slate-200 text-slate-600' : 'bg-blue-50 text-primary'}`}
                >
                  {following['Rohan'] ? 'Following' : 'Follow'}
                </button>
            </div>
             <div className="flex items-center gap-3">
                <div className="relative">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alice" className="w-9 h-9 rounded-full bg-slate-100 border border-slate-100" />
                     <div className="absolute -top-1 -left-1 text-slate-400 drop-shadow-sm"><i className="ph-fill ph-crown text-sm"></i></div>
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-slate-800 truncate">Priya Singh</h4>
                     <div className="flex items-center gap-1">
                        <i className="ph-fill ph-star text-yellow-400 text-[10px]"></i>
                        <span className="text-[10px] text-slate-500 font-medium">980 Rep</span>
                    </div>
                </div>
                <button 
                  onClick={() => toggleFollow('Priya')}
                  className={`text-xs font-bold px-2 py-1 rounded transition-colors ${following['Priya'] ? 'bg-slate-200 text-slate-600' : 'bg-blue-50 text-primary'}`}
                >
                  {following['Priya'] ? 'Following' : 'Follow'}
                </button>
            </div>
        </div>
      </div>

      <div className="px-2">
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
            <a href="#" className="text-[11px] text-slate-400 hover:text-slate-600">About</a>
            <a href="#" className="text-[11px] text-slate-400 hover:text-slate-600">Guidelines</a>
            <a href="#" className="text-[11px] text-slate-400 hover:text-slate-600">Privacy</a>
        </div>
        <p className="text-[10px] text-slate-300">© 2024 StudSphere (Nepal)</p>
      </div>
    </aside>
  );
};

export default SidebarRight;
