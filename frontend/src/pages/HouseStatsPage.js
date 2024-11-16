import BackgroundImage from '../assets/bg.png';
import React, { useState } from "react";
import Credits from '../components/Credits';
import TopBar from '../components/TopBar';

const houses = [
    "GALACTICOS",
    "RED DEVILS",
    "GUNNERS",
    "CULERS",
];

const batches = ["21k", "22k", "23k", "24k"];

function HouseBatchScore({ house, batch, data }) {
    const calculateBatchTotal = () => {
        if (!data || !Array.isArray(data)) return 0;
        return data.reduce((total, team) => {
            if (team.house === house && team.teamName.includes(batch)) {
                return total + parseInt(team.score || 0);
            }
            return total;
        }, 0);
    };

    return (
        <div className="flex justify-between items-center py-2 px-4 bg-white/5 backdrop-blur-md rounded-xl 
                        transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer
                        border border-white/10 hover:border-white/20">
            <span className="text-[#f7b72e] vsm:text-xs text-[10px] font-bold">{batch}</span>
            <span className="text-white vsm:text-xs text-[10px] font-bold">{calculateBatchTotal()}</span>
        </div>
    );
}

function HouseCard({ house, data }) {
    const calculateHouseTotal = () => {
        if (!data || !Array.isArray(data)) return 0;
        return data.reduce((total, team) => {
            if (team.house === house) {
                return total + parseInt(team.score || 0);
            }
            return total;
        }, 0);
    };

    const getBorderColor = (house) => {
        switch (house) {
            case 'GALACTICOS': return 'from-[#087fd8]/30 to-transparent';
            case 'RED DEVILS': return 'from-[#d81408]/30 to-transparent';
            case 'GUNNERS': return 'from-[#d81408]/30 to-transparent';
            case 'CULERS': return 'from-[#f2c500]/30 to-transparent';
            default: return 'from-[#f7b72e]/30 to-transparent';
        }
    };

    const getHouseColor = (house) => {
        switch (house) {
            case 'GALACTICOS': return 'text-[#087fd8]';
            case 'RED DEVILS': return 'text-[#d81408]';
            case 'GUNNERS': return 'text-[#d81408]';
            case 'CULERS': return 'text-[#f2c500]';
            default: return 'text-[#f7b72e]';
        }
    };

    return (
        <div className={`bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden
                        transition-all duration-500 hover:scale-[1.02]
                        border border-white/10 hover:border-white/20
                        [box-shadow:0_8px_32px_rgba(0,0,0,0.37)]
                        bg-gradient-to-b ${getBorderColor(house)}`}>
            <div className="p-4 border-b border-white/10">
                <div className="flex justify-between items-center">
                    <h2 className={`${getHouseColor(house)} vsm:text-xl text-lg font-bold tracking-wider`}>{house}</h2>
                    <p className="text-white vsm:text-2xl text-xl font-bold 
                                bg-white/5 px-3 py-0.5 rounded-xl
                                transition-all duration-300 hover:bg-white/10">
                        {calculateHouseTotal()}
                    </p>
                </div>
            </div>
            <div className="p-4 space-y-2">
                {batches.map(batch => (
                    <HouseBatchScore 
                        key={`${house}-${batch}`} 
                        house={house} 
                        batch={batch} 
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
}

export default function HouseStatsPage() {
    const [data, setData] = useState([]);

    return (
        <>
            <div className="w-full bg-cover min-h-screen grid place-items-center content-start 
                           overflow-x-hidden font-bold pb-20" 
                 style={{ "backgroundImage": `url(${BackgroundImage})` }}>
                <TopBar />
                
                <div className='mt-8' />
                
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 
                               w-[95%] sm:w-5/6 px-4 mx-auto
                               transition-all duration-300">
                    {houses.map(house => (
                        <HouseCard 
                            key={house} 
                            house={house} 
                            data={data}
                        />
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                    <Credits />
                </div>
            </div>
        </>
    );
} 