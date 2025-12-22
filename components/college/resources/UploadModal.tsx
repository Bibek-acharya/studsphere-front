
import React from 'react';

interface UploadModalProps {
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-slide-up overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-center">
          <h3 className="font-bold text-lg text-slate-800">Upload Material</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
            <i className="ph-bold ph-x text-lg"></i>
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-primary hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <i className="ph-bold ph-cloud-arrow-up text-2xl"></i>
            </div>
            <p className="text-sm font-bold text-slate-700">Click to upload or drag & drop</p>
            <p className="text-xs text-slate-500 mt-1">PDF, DOCX, JPG (Max 10MB)</p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">Resource Title</label>
              <input type="text" placeholder="e.g., Physics Chapter 1 Notes" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Category</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none">
                  <option>Notes</option>
                  <option>Syllabus</option>
                  <option>Solutions</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Level</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none">
                  <option>Bachelors</option>
                  <option>Masters</option>
                  <option>+2 (NEB)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 flex justify-end gap-3 border-t border-slate-100">
          <button onClick={onClose} className="px-5 py-2 text-slate-600 font-bold text-sm hover:bg-slate-200 rounded-lg transition-colors">Cancel</button>
          <button className="px-5 py-2 bg-primary text-white font-bold text-sm rounded-lg hover:bg-primaryDark transition-colors shadow-lg shadow-primary/20">Upload Now</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
