
import React from 'react';
import { College } from './types';
import { CloseIcon, StarIcon } from './Icons';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColleges: College[];
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, selectedColleges }) => {
  if (!isOpen) return null;

  const metrics = [
    { label: "Overall Rank", key: "rank", format: (c: College) => <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-800 text-white rounded-full font-bold text-xs shadow-sm">#{c.rank}</span> },
    { label: "Location", key: "location", format: (c: College) => c.location },
    { label: "Year", key: "year", format: (c: College) => <span className="font-bold text-slate-700">{c.stats.year}</span> },
    { label: "Faculty", key: "faculty", format: (c: College) => <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{c.stats.faculty}</span> },
    { label: "Student Rating", key: "rating", format: (c: College) => (
      <div className="flex items-center justify-center gap-1">
        <StarIcon />
        <span className="font-bold text-slate-700">{c.stats.rating}</span>
      </div>
    )},
    { label: "Top Focus", key: "focus", format: (c: College) => <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded uppercase tracking-wider">{c.tags[0]}</span> },
  ];

  return (
    <div className="fixed inset-0 z-60 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
          onClick={onClose}
        ></div>

        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-6xl border border-slate-200 animate-fade-in">
          <div className="bg-white px-4 py-4 sm:px-6 flex justify-between items-center border-b border-slate-100 sticky top-0 left-0 z-20">
            <div>
              <h3 className="text-lg font-bold leading-6 text-slate-900">Comparison Table</h3>
              <p className="text-xs text-slate-400 mt-0.5">Side-by-side evaluation of selected institutions.</p>
            </div>
            <button 
              type="button" 
              className="rounded-full p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition" 
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
          
          <div className="bg-slate-50/50 p-4 sm:p-8 overflow-x-auto">
            <div className="min-w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="p-4 border-b border-slate-200 min-w-[140px] text-xs font-bold text-slate-400 uppercase tracking-wider sticky left-0 bg-slate-50 z-10">Metric</th>
                    {selectedColleges.map(c => (
                      <th key={c.id} className="p-6 border-b border-slate-200 min-w-[200px]">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md`}>
                            {c.logo}
                          </div>
                          <span className="font-bold text-slate-800 text-sm leading-tight max-w-[150px]">{c.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {metrics.map((metric) => (
                    <tr key={metric.label} className="hover:bg-slate-50 transition border-b border-slate-50 last:border-0">
                      <td className="p-4 font-semibold text-slate-500 text-xs bg-white sticky left-0 border-r border-slate-100">
                        {metric.label}
                      </td>
                      {selectedColleges.map(c => (
                        <td key={`${c.id}-${metric.label}`} className="p-4 text-center text-slate-600">
                          {metric.format(c)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
