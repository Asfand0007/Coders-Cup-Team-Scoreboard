import React from 'react';

export default function HouseTotal({ house, data }) {
    const calculateHouseTotal = () => {
        if (!data || !Array.isArray(data)) {
            return 0;
        }
        
        return data.reduce((total, team) => {
            if (team.house === house) {
                return total + parseInt(team.score || 0);
            }
            return total;
        }, 0);
    };

    const getBorderColor = (house) => {
        switch (house) {
            case 'GALACTICOS':
                return 'border-[#087fd8]';  // Blue
            case 'RED DEVILS':
                return 'border-[#d81408]';  // Red
            case 'GUNNERS':
                return 'border-[#d81408]';  // Red
            case 'CULERS':
                return 'border-[#f2c500]';  // Yellow
            default:
                return 'border-[#f7b72e]';
        }
    };

    return (
        <div className={`inline-flex h-12 border-2 ${getBorderColor(house)} 
                        bg-black/40 shadow-sm backdrop-blur-lg rounded-full 
                        px-4 items-center justify-between w-full
                        transition-all duration-300 hover:scale-[1.02]`}>
            <h2 className="text-[#f7b72e] text-sm sm:text-base font-bold">{house}</h2>
            <p className="text-white text-base sm:text-lg font-bold">{calculateHouseTotal()}</p>
        </div>
    );
} 