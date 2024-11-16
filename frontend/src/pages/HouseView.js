import BackgroundImage from '../assets/bg.png';
import React, { useEffect, useState } from "react";
import ScoreTable from '../components/ScoreTable';
import TopBar from '../components/TopBar';
import BatchSelector from '../components/BatchSelector';
import HouseSelector from '../components/HouseSelector';
import HouseTotal from '../components/HouseTotal';

var batches = [
    "21k",
    "22k",
    "23k",
    "24k",
]

var houses = [
    "GALACTICOS",
    "RED DEVILS",
    "GUNNERS",
    "CULERS",
]

export default function HouseViewPage() {
    const [batch, setBatch] = useState(batches[0]);
    const [house, setHouse] = useState(houses[0]);
    const [data, setData] = useState([]);

    return (
        <div className="w-full bg-cover min-h-screen grid place-items-center content-start overflow-x-hidden font-bold pl-8" 
             style={{ "backgroundImage": `url(${BackgroundImage})` }}>
            <TopBar />

            <div className='mt-4' />

            {/* Top Score Display */}
            <div className="w-[95%] sm:w-5/6 px-4 flex flex-col sm:flex-row gap-4 justify-between">
                {houses.map(houseName => (
                    <div key={houseName} 
                         className={`flex-1 flex justify-between items-center 
                                   bg-black/40 backdrop-blur-lg rounded-full px-6 py-3
                                   border min-w-[250px] mx-auto w-full sm:w-auto
                                   ${houseName === 'GALACTICOS' ? 'border-[#087fd8]' : 
                                     houseName === 'RED DEVILS' ? 'border-[#d81408]' :
                                     houseName === 'GUNNERS' ? 'border-[#d81408]' :
                                     'border-[#f2c500]'}`}>
                        <span className="text-[#f7b72e] font-bold text-lg">{houseName}</span>
                        <span className="text-white font-bold text-lg">0</span>
                    </div>
                ))}
            </div>

            <div className='mt-4' />

            {/* House Selector */}
            <div className="w-[95%] sm:w-5/6 px-4 sm:pl-72">
                <HouseSelector houses={houses} selectedHouse={house} setHouse={setHouse} />
            </div>

            <div className='mt-2' />

            {/* Batch Selector */}
            <div className="w-[95%] sm:w-5/6 px-4 sm:pl-72">
                <BatchSelector batches={batches} selectedBatch={batch} setBatch={setBatch} />
            </div>

            <div className='mt-8' />

            {/* Score Table */}
            <div className='w-[95%] sm:w-5/6 px-4'>
                <ScoreTable room={batch} onDataUpdate={setData} />
            </div>

            <div className='mt-7' />
        </div>
    );
}