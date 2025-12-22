
import React from 'react';
import { Resource } from './types';

interface PreviewModalProps {
  resource: Resource | null;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ resource, onClose }) => {
  if (!resource) return null;

  const { content } = resource;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl animate-slide-up overflow-hidden max-h-[90vh] flex flex-col">
        <div className="bg-primary px-6 py-4 text-white flex justify-between items-center shrink-0">
          <h3 className="font-bold text-xl">{resource.title}</h3>
          <button onClick={onClose} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors">
            <i className="ph-bold ph-x text-lg"></i>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto grow flex flex-col">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-6">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-semibold flex items-center gap-2">
              <i className="ph-fill ph-star text-amber-500"></i> {resource.rating} Rating
            </div>
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-semibold flex items-center gap-2">
              <i className="ph-bold ph-download-simple text-primary"></i> {resource.downloads} Downloads
            </div>
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-semibold flex items-center gap-2">
              <i className="ph-bold ph-eye text-indigo-500"></i> {resource.views} Views
            </div>
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-semibold flex items-center gap-2">
              <i className="ph-bold ph-user-circle text-slate-400"></i> By {resource.author}
            </div>
          </div>

          <div className="space-y-6 grow flex flex-col min-h-[300px]">
            <div className="border-b border-slate-100 pb-4 shrink-0">
              <h5 className="text-lg font-bold text-primary mb-2 flex items-center gap-2"><i className="ph-fill ph-info"></i> Resource Overview</h5>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="p-2 bg-slate-50 rounded-md font-medium">Type: <span className="font-bold text-slate-800">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span></span>
                <span className="p-2 bg-slate-50 rounded-md font-medium">Format: <span className="font-bold text-slate-800">{content.fileType || 'Unknown'}</span></span>
                {content.file_size && <span className="p-2 bg-slate-50 rounded-md font-medium">Size: <span className="font-bold text-slate-800">{content.file_size}</span></span>}
              </div>
            </div>

            {content.previewUrl && (content.fileType === 'PDF' || content.fileType === 'DOCX') ? (
              <div className="flex flex-col grow">
                <h5 className="text-lg font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2 flex-shrink-0"><i className="ph-fill ph-file-pdf"></i> Document Preview</h5>
                <div className="border border-slate-200 rounded-lg overflow-hidden shadow-inner flex-grow">
                  <iframe src={content.previewUrl} className="w-full h-full min-h-[400px]" frameBorder="0"></iframe>
                </div>
              </div>
            ) : content.previewUrl && (
              <div className="shrink-0">
                <h5 className="text-lg font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2"><i className="ph-fill ph-image"></i> Preview Snapshot</h5>
                <img src={content.previewUrl} alt="Resource Preview" className="w-full h-auto rounded-lg shadow-xl object-contain max-h-[500px] border border-slate-100" />
              </div>
            )}

            <div className="mt-6">
              <h5 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2"><i className="ph-fill ph-notebook"></i> Description & Details</h5>
              <p className="text-sm text-slate-600 mb-4">{content.summary || content.details || content.description || 'No detailed description provided.'}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 flex justify-end gap-3 border-t border-slate-100 shrink-0">
          <button onClick={onClose} className="px-5 py-2 text-slate-600 font-bold text-sm hover:bg-slate-200 rounded-lg transition-colors">Close Preview</button>
          <button className="px-5 py-2 bg-accent text-white font-bold text-sm rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-accent/20 flex items-center gap-2">
            <i className="ph-bold ph-download-simple"></i> Download File
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
