
import React, { useState } from 'react';
import PostCard from './PostCard';
import { Post } from '../types';

interface FeedProps {
  openPostModal: () => void;
  addToast: (msg: string, type?: any) => void;
}

const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    author: 'Sarah Sharma',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Sarah',
    role: 'BIM 4th Sem',
    timeAgo: '2 hours ago',
    title: 'Best resources for studying Data Structure in C for TU?',
    content: 'I\'m struggling with linked lists and trees in Data Structure (BIM 4th Sem, TU). Can anyone recommend the best Nepali authors or online courses that explain these topics clearly based on the TU syllabus?',
    tags: ['#TU_BIM', '#DataStructure', '#ComputerScience'],
    upvotes: 45,
    commentsCount: 12,
    isOnline: true
  },
  {
    id: '2',
    author: 'Aayush K.C.',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=John',
    role: 'Alumni (KU)',
    timeAgo: '5 hours ago',
    title: 'Is the CTEVT Pre-Board Exam routine official for Diploma in Engineering?',
    content: 'I saw a routine circulating on Telegram groups but I cannot find it on the official CTEVT website. Can anyone confirm if it is authentic? Worried about the dates overlapping!',
    tags: ['#CTEVT', '#Diploma'],
    upvotes: 128,
    commentsCount: 34
  }
];

const Feed: React.FC<FeedProps> = ({ openPostModal, addToast }) => {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setHasMore(false);
      addToast("All posts loaded", 'info');
    }, 1500);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-soft p-4 border border-slate-100 transition-shadow hover:shadow-md">
        <div className="flex gap-4 mb-3">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="User" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100" />
            <button 
              onClick={openPostModal}
              className="flex-1 text-left bg-slate-50 hover:bg-slate-100 text-slate-500 py-2.5 px-4 rounded-xl text-sm border border-slate-200 transition-all font-medium focus:ring-2 focus:ring-primary/20"
            >
                Ask a question about TU/KU, or share study tips...
            </button>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
            <div className="flex gap-2">
                <button onClick={() => addToast('Photo upload coming soon!', 'info')} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-accent text-xs font-semibold transition-colors active:scale-95">
                    <i className="ph ph-image text-lg"></i> Photo
                </button>
                <button onClick={() => addToast('Link sharing coming soon!', 'info')} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-primary text-xs font-semibold transition-colors active:scale-95">
                    <i className="ph ph-link text-lg"></i> Link
                </button>
                <button onClick={() => addToast('Poll feature coming soon!', 'info')} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-purple-600 text-xs font-semibold transition-colors active:scale-95">
                    <i className="ph ph-poll text-lg"></i> Poll
                </button>
            </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-4 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
        <div className="absolute top-0 right-0 bg-blue-100 text-primary font-bold text-[10px] px-2 py-1 rounded-bl-lg">PINNED</div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-blue-100 flex-shrink-0">
            <i className="ph-fill ph-megaphone text-xl animate-pulse"></i>
        </div>
        <div>
            <h3 className="font-bold text-slate-800 text-sm mb-1">New Policy: Submitting NEB/TU Project Work</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Ensure your project posts follow the plagiarism guidelines to maintain quality. <a href="#" className="text-primary font-semibold hover:underline">View latest rules</a></p>
        </div>
      </div>

      {posts.map(post => (
        <PostCard key={post.id} post={post} addToast={addToast} />
      ))}

      <button 
        disabled={!hasMore || loading}
        onClick={loadMore}
        className={`w-full py-3 bg-white border border-slate-200 text-primary font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 ${!hasMore ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span>{loading ? 'Loading...' : hasMore ? 'Load More Discussions' : 'No more discussions found'}</span>
        <i className={`ph-bold ${loading ? 'ph-spinner animate-spin' : hasMore ? 'ph-caret-down' : 'ph-smiley'} transition-transform`}></i>
      </button>
    </>
  );
};

export default Feed;
