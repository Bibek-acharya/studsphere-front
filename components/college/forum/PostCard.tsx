
import React, { useState } from 'react';
import { Post } from './types';

interface PostCardProps {
  post: Post;
  addToast: (msg: string, type?: unknown) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, addToast }) => {
  const [voteStatus, setVoteStatus] = useState<0 | 1 | -1>(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(post.upvotes);

  const handleVote = (val: 1 | -1) => {
    if (voteStatus === val) {
      setVoteStatus(0);
      setUpvoteCount(prev => prev - val);
    } else {
      const diff = voteStatus === 0 ? val : val * 2;
      setVoteStatus(val);
      setUpvoteCount(prev => prev + diff);
      addToast(val === 1 ? "Upvoted!" : "Downvoted", val === 1 ? "success" : "info");
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    addToast(!isBookmarked ? "Post saved to bookmarks" : "Removed from bookmarks", !isBookmarked ? "success" : "info");
  };

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(`https://studsphere.com/discussion/${post.id}`);
      addToast("Link copied to clipboard!");
    } catch (error) {
      addToast("Failed to copy link", "error");
    }
  };

  return (
    <article className="bg-white p-5 rounded-2xl shadow-soft border border-slate-100 hover:border-slate-200 transition-all animate-fade-in group">
        <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
                <div className="relative cursor-pointer">
                    <img src={post.avatar} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 transition-transform hover:scale-105" alt="User" />
                    {post.isOnline && <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>}
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-sm hover:underline cursor-pointer">{post.author}</h4>
                    <div className="text-xs text-slate-500 flex items-center gap-2">
                        {post.role && <span className={`px-1.5 rounded text-[10px] font-semibold ${post.role.includes('Alumni') ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>{post.role}</span>}
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{post.timeAgo}</span>
                    </div>
                </div>
            </div>
            <button className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50 transition-colors">
                <i className="ph-bold ph-dots-three text-xl"></i>
            </button>
        </div>

        <div className="mb-4">
            <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight hover:text-primary cursor-pointer transition-colors">
                {post.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {post.content}
            </p>
            <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <a key={tag} href="#" className={`text-[11px] px-2.5 py-1 rounded-full font-bold border transition-colors ${tag.includes('TU') || tag.includes('KU') ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20' : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100'}`}>
                    {tag}
                  </a>
                ))}
            </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-50">
            <div className="flex items-center gap-1">
                <button 
                  onClick={() => handleVote(1)}
                  className={`vote-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all active:scale-95 group/vote ${voteStatus === 1 ? 'text-primary bg-blue-50' : 'text-slate-500 hover:bg-blue-50 hover:text-primary'}`}
                >
                    <i className={`ph ${voteStatus === 1 ? 'ph-fill' : ''} ph-arrow-fat-up text-lg group-hover/vote:weight-fill`}></i>
                    <span className="font-bold text-sm count">{upvoteCount}</span>
                </button>
                <button 
                  onClick={() => handleVote(-1)}
                  className={`vote-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all active:scale-95 group/down ${voteStatus === -1 ? 'text-danger bg-red-50' : 'text-slate-500 hover:bg-red-50 hover:text-danger'}`}
                >
                    <i className={`ph ${voteStatus === -1 ? 'ph-fill' : ''} ph-arrow-fat-down text-lg group-hover/down:weight-fill`}></i>
                </button>
                <button onClick={() => addToast('Opening comments...', 'info')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-500 hover:bg-slate-50 hover:text-accent transition-colors ml-2 active:scale-95">
                    <i className="ph ph-chat-circle text-lg"></i>
                    <span className="font-medium text-xs">{post.commentsCount} Answers</span>
                </button>
            </div>
            <div className="flex items-center gap-2">
                <button 
                  onClick={toggleBookmark}
                  className={`p-2 rounded-full transition-all active:scale-95 ${isBookmarked ? 'text-secondary bg-yellow-50' : 'text-slate-400 hover:text-secondary hover:bg-yellow-50'}`}
                  title="Bookmark"
                >
                    <i className={`ph ${isBookmarked ? 'ph-fill' : ''} ph-bookmark-simple text-lg`}></i>
                </button>
                <button 
                  onClick={handleShare}
                  className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-full transition-all active:scale-95" 
                  title="Share"
                >
                    <i className="ph ph-share-network text-lg"></i>
                </button>
            </div>
        </div>
    </article>
  );
};

export default PostCard;
