
import React from 'react';

interface SidebarLeftProps {
  activeNav: string;
  setActiveNav: (val: string) => void;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { name: 'Home Feed', icon: 'ph-fill ph-house' },
    { name: 'Trending (Hot Topics)', icon: 'ph-fill ph-fire', iconColor: 'text-secondary' },
    { name: 'Saved Posts', icon: 'ph-fill ph-bookmark-simple', iconColor: 'text-indigo-500' }
  ];

  return (
    <aside className="hidden lg:block col-span-3 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scroll pr-2">
      <div className="mb-6 bg-white p-3 rounded-xl shadow-soft border border-slate-100">
        <h3 className="px-1 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">My Feed</h3>
        <nav className="space-y-0.5">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href="#" 
              className={`nav-item flex items-center gap-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-all ${activeNav === item.name ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setActiveNav(item.name); }}
            >
              <i className={`${item.icon} text-lg ${item.iconColor || ''}`}></i> {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="mb-6 bg-white p-3 rounded-xl shadow-soft border border-slate-100">
        <h3 className="px-1 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Followed Communities</h3>
        <nav className="space-y-0.5">
          <a href="#" className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg font-medium transition-colors group">
            <i className="ph ph-lightbulb-filament text-amber-500 group-hover:scale-110 transition-transform"></i>
            <span className="flex-1">Medical Entrance (IOM)</span>
            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold">New</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg font-medium transition-colors group">
            <i className="ph ph-chart-lineup text-red-500 group-hover:scale-110 transition-transform"></i>
            <span className="flex-1">CA & ACCA Prep</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg font-medium transition-colors group">
            <i className="ph ph-bank text-accent group-hover:scale-110 transition-transform"></i>
            <span className="flex-1">Lok Sewa Aayog (Gazetted)</span>
          </a>
        </nav>
      </div>

      <div className="mb-6 bg-white p-3 rounded-xl shadow-soft border border-slate-100">
        <h3 className="px-1 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Browse Courses & Exams</h3>
        <nav className="space-y-0.5">
          <a href="#" className="flex items-center justify-between px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg font-medium transition-colors group">
            <span className="flex items-center gap-3"><i className="ph ph-code text-primary group-hover:scale-110 transition-transform"></i> BSc CSIT / BCA / BIT</span>
            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">120</span>
          </a>
          <a href="#" className="flex items-center justify-between px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg font-medium transition-colors group">
            <span className="flex items-center gap-3"><i className="ph ph-robot text-teal-600 group-hover:scale-110 transition-transform"></i> IOE Entrance (Pulchowk)</span>
            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold">85</span>
          </a>
          <a href="#" className="flex items-center justify-between px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg font-medium transition-colors group">
            <span className="flex items-center gap-3"><i className="ph ph-chart-pie slice text-yellow-600 group-hover:scale-110 transition-transform"></i> BBA / MBS / Finance</span>
            <span className="text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-bold">204</span>
          </a>
        </nav>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary to-blue-700 p-5 text-white shadow-lg shadow-primary/30 group cursor-pointer hover:shadow-xl transition-shadow">
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <h4 className="font-bold text-lg mb-1">Lok Sewa Preparation Guide</h4>
          <p className="text-blue-100 text-xs mb-4 font-medium opacity-90">Download our free PDF guide for tips, syllabus, and resources.</p>
          <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold w-full hover:bg-blue-50 transition shadow-sm active:scale-95">Download Now</button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarLeft;
