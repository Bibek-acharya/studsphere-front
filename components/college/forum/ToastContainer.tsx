
import React from 'react';
import { ToastMessage } from './types';

interface ToastContainerProps {
  toasts: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <div className="fixed bottom-5 right-5 z-100 flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => {
        let icon = 'check-circle';
        let colorClass = 'bg-primaryDark text-white';
        
        if (toast.type === 'error') {
          icon = 'warning-circle';
          colorClass = 'bg-danger text-white';
        } else if (toast.type === 'info') {
          icon = 'info';
          colorClass = 'bg-accent text-white';
        }

        return (
          <div 
            key={toast.id}
            className={`${colorClass} px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 min-w-[300px] toast-enter pointer-events-auto transform transition-all duration-300`}
          >
            <i className={`ph-fill ph-${icon} text-xl`}></i>
            <span className="font-medium text-sm">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
