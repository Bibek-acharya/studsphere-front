
"use client";

import React, { useState, useCallback } from 'react';
import Header from '@/components/college/forum/Header';
import SidebarLeft from '@/components/college/forum/SideBarLeft';
import SidebarRight from '@/components/college/forum/SideBarRight';
import Feed from '@/components/college/forum/Feed';
import MobileMenu from '@/components/college/forum/MobileMenu';
import CreatePostModal from '@/components/college/forum/CreatePostModal';
import ToastContainer from '@/components/college/forum/ToastContainer';
import { ToastType, ToastMessage } from '@/components/college/forum/types';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeNav, setActiveNav] = useState('Home Feed');

  const addToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const openPostModal = () => setIsPostModalOpen(true);
  const closePostModal = () => setIsPostModalOpen(false);

  return (
    <div className="min-h-screen bg-bgLight">
      <Header 
        toggleMobileMenu={toggleMobileMenu} 
        openPostModal={openPostModal} 
        addToast={addToast}
      />
      
      <div className="container mx-auto px-4 lg:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <SidebarLeft 
          activeNav={activeNav} 
          setActiveNav={setActiveNav} 
        />
        
        <main className="col-span-1 lg:col-span-6 space-y-6">
          <Feed 
            openPostModal={openPostModal} 
            addToast={addToast} 
          />
        </main>
        
        <SidebarRight addToast={addToast} />
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={toggleMobileMenu} 
      />
      
      <CreatePostModal 
        isOpen={isPostModalOpen} 
        onClose={closePostModal} 
        addToast={addToast}
      />
      
      <ToastContainer toasts={toasts} />

      {/* Mobile Floating Action Button */}
      <button 
        onClick={openPostModal}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-xl shadow-primary/40 flex items-center justify-center text-2xl z-40 hover:scale-110 active:scale-90 transition-transform"
      >
        <i className="ph-bold ph-plus"></i>
      </button>
    </div>
  );
};

export default App;
