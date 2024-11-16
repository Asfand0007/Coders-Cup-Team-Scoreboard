import React from 'react';

export default function PageSwitcher({ currentView, onSwitch }) {
    return (
        <button 
            onClick={onSwitch}
            className="fixed sm:top-4 sm:right-4 bottom-4 right-4
                       bg-[#f7b72e] hover:bg-[#f7b72e]/80
                       text-black text-xs font-semibold
                       h-8 px-3
                       rounded-full 
                       flex items-center justify-center
                       transition-all duration-300 ease-in-out 
                       shadow-sm hover:shadow-md
                       active:scale-95"
        >
            {currentView === 'house' ? 'Stats' : 'House'}
        </button>
    );
} 