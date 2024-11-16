import BackgroundImage from '../assets/bg.png';
import React, { useEffect, useState, setState } from "react";

import Credits from '../components/Credits';
import ScoreTable from '../components/ScoreTable';
import TopBar from '../components/TopBar';
import BatchSelector from '../components/BatchSelector';
import HouseSelector from '../components/HouseSelector';

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


    return (
        <>
            <div className="w-full bg-cover h-screen grid place-items-center content-start overflow-x-hidden overflow-y-scroll font-bold" style={{ "backgroundImage": `url(${BackgroundImage})` }}>
                < TopBar />

                <div className='mt-8' />

                <HouseSelector houses={houses} selectedHouse={house} setHouse={setHouse} />

                <div className='mt-2' />

                <BatchSelector batches={batches} selectedBatch={batch} setBatch={setBatch} />

                <div className='mt-8' />

                <div className='w-screen content-center justify-center flex'>
                    <div className=' w-5/6 h-96'>
                        <ScoreTable room={batch} />
                    </div>
                </div>

                <div className='mt-7' />


            </div >
            <div className="relative">
                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                    <Credits />
                </div>
            </div>
        </>
    );
}