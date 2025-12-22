
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="lg:col-span-3 space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-sm">
          <i className="ph-fill ph-chart-pie-slice text-primary"></i> Platform Insights
        </h3>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-primary progress-ring__circle" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-[10px] font-bold text-slate-400">TU</span>
                <span className="text-xs font-bold text-slate-800">75%</span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-slate-500 mt-2">Resource Share</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-accent progress-ring__circle" strokeDasharray="42, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <i className="ph-fill ph-check-circle text-accent text-lg"></i>
              </div>
            </div>
            <span className="text-[10px] font-medium text-slate-500 mt-2">Verified Docs</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-[10px] font-bold mb-1">
              <span className="text-slate-600">Total Students</span>
              <span className="text-indigo-600">5,430</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-bold mb-1">
              <span className="text-slate-600">Downloads Today</span>
              <span className="text-primary">1,240</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{width: '65%'}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 text-sm">Contribution Rules</h3>
          <i className="ph-fill ph-shield-check text-accent text-lg"></i>
        </div>
        <div className="space-y-3">
          {[
            { icon: 'ph-prohibit', color: 'red', title: 'No Plagiarism', text: 'Ensure all uploads are original.' },
            { icon: 'ph-text-aa', color: 'blue', title: 'Clear Titles', text: 'Use proper formatting like "Subject - Chapter".' },
            { icon: 'ph-hand-heart', color: 'amber', title: 'Be Respectful', text: 'Follow community standards.' },
            { icon: 'ph-check', color: 'green', title: 'Verified Content', text: 'Content is reviewed by mods.' }
          ].map((rule, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className={`w-5 h-5 rounded-full bg-${rule.color}-50 text-${rule.color}-500 flex items-center justify-center shrink-0 mt-0.5`}>
                <i className={`ph-bold ${rule.icon} text-xs`}></i>
              </div>
              <div className="text-xs text-slate-600 leading-tight">
                <span className="font-bold text-slate-800">{rule.title}:</span> {rule.text}
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
          Read Full Guidelines
        </button>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 text-sm">Top Contributors</h3>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-400">LIVE</span>
          </div>
        </div>
        
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
          <div className="bg-gradient-to-r from-amber-50 to-white p-2 rounded-xl border border-amber-100 flex items-center gap-3">
            <div className="relative">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneeka" className="w-10 h-10 rounded-full bg-white shadow-sm p-0.5" />
              <div className="absolute -top-1 -left-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white">1</div>
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-slate-800">Sita Sharma</div>
              <div className="text-[10px] text-slate-500">245 Uploads</div>
            </div>
            <div className="text-amber-500 font-bold text-xs">4.2k pts</div>
          </div>
          {/* Add more contributors as needed */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
