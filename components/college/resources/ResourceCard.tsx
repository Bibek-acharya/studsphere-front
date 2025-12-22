
import React from 'react';
import { Resource } from './types';

interface ResourceCardProps {
  resource: Resource;
  onPreview: (id: number) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onPreview }) => {
  return (
    <div 
      onClick={() => onPreview(resource.id)}
      className="bg-white p-5 rounded-2xl border border-slate-100 relative group cursor-pointer transition-all hover:translate-y-[-5px] hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 ${resource.bg} ${resource.color} rounded-xl flex items-center justify-center text-xl`}>
          <i className={`ph-fill ${resource.icon}`}></i>
        </div>
        <div className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-wide">
          {resource.type}
        </div>
      </div>
      
      <h4 className="font-bold text-slate-800 mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
        {resource.title}
      </h4>
      
      <div className="flex items-center gap-2 mb-4">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${resource.author}`} 
          className="w-5 h-5 rounded-full bg-slate-100" 
        />
        <span className="text-xs text-slate-500 font-medium">{resource.author}</span>
        <span className="text-xs text-slate-300">•</span>
        <span className="text-xs text-slate-400">{resource.date}</span>
      </div>

      <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
        <div className="flex gap-3 text-xs font-bold text-slate-500">
          <span className="flex items-center gap-1"><i className="ph-bold ph-download-simple"></i> {resource.downloads}</span>
          <span className="flex items-center gap-1"><i className="ph-bold ph-eye"></i> {resource.views}</span>
          <span className="flex items-center gap-1 text-amber-500"><i className="ph-fill ph-star"></i> {resource.rating}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
          <i className="ph-bold ph-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
