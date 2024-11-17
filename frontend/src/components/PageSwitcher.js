import React from 'react';

export default function PageSwitcher({ currentView, onSwitch }) {
    return (
        <button
            onClick={onSwitch}
            className="bg-[#f7b72e] hover:bg-[#f7b72e]/80
                       text-black text-xs font-semibold
                       h-8 px-3
                       rounded-full 
                       flex items-center justify-center
                       transition-all duration-300 ease-in-out 
                       shadow-sm hover:shadow-md
                       active:scale-95"
        >
            {currentView === 'house-rankings'
                ? 'Back to Home'
                : 'See House Rankings?'}
        </button>
    );
} 