
import React, { useState } from 'react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  addToast: (msg: string, type?: any) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose, addToast }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) {
      addToast("Please enter a title for your discussion.", "error");
      return;
    }
    addToast("Discussion posted successfully!", "success");
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity cursor-pointer" onClick={onClose}></div>
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                <h3 className="font-bold text-lg text-slate-800">Create New Discussion</h3>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100">
                  <i className="ph-bold ph-x text-xl"></i>
                </button>
            </div>
            <div className="p-6 space-y-5 overflow-y-auto">
                <div>
                    <input 
                      type="text" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="What's on your mind? (e.g., Question about TU exams)" 
                      className="w-full text-lg font-bold placeholder:text-slate-400 border-none outline-none focus:ring-0 p-0 text-slate-800"
                    />
                </div>
                <div>
                    <textarea 
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={6} 
                      placeholder="Share details about your question, experience, or opinion..." 
                      className="w-full border-none outline-none focus:ring-0 p-0 text-slate-600 resize-none text-sm leading-relaxed"
                    ></textarea>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full flex items-center gap-1 cursor-default">
                        #TU_BIM <button className="hover:text-primaryDark" onClick={() => addToast('Tag removal is active!', 'info')}><i className="ph-bold ph-x text-xs"></i></button>
                    </span>
                    <button className="px-3 py-1 border border-slate-200 text-slate-500 text-xs font-bold rounded-full hover:border-slate-300 hover:bg-slate-50 flex items-center gap-1 transition-colors">
                        <i className="ph-bold ph-plus"></i> Add Tag
                    </button>
                </div>
            </div>
            <div className="p-4 border-t border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-2">
                    <button className="text-slate-400 hover:text-slate-600" title="Settings" onClick={() => addToast('Post settings feature coming soon!', 'info')}>
                      <i className="ph-bold ph-gear text-xl"></i>
                    </button>
                </div>
                <div className="flex gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-slate-600 font-bold text-sm hover:bg-slate-200 rounded-lg transition">Cancel</button>
                    <button 
                      onClick={handleSubmit}
                      className="px-6 py-2 bg-primary text-white font-bold text-sm rounded-lg hover:bg-primaryDark shadow-lg shadow-primary/30 transition transform active:scale-95"
                    >Post</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CreatePostModal;
