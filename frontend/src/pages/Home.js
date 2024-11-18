import BackgroundImage from '../assets/bg.png';
import React, { useState } from "react";
import TopBar from '../components/TopBar';
import ScoreTable from '../components/ScoreTable';
import BatchSelector from '../components/BatchSelector';

var batches = [
    "21k",
    "22k",
    "23k",
    "24k",
]

export default function HomePage() {
    const [batch, setBatch] = useState(batches[0]);


    return (
        <div className="w-full bg-cover h-screen grid place-items-center content-start overflow-x-hidden overflow-y-scroll font-bold"
            style={{ "backgroundImage": `url(${BackgroundImage})` }}>
            <TopBar />

            <div className='mt-4' />

            <BatchSelector batches={batches} setBatch={setBatch} selectedBatch={batch} />

            <div className='w-5/6 h-96'>
                <ScoreTable room={batch} />
            </div>

            <div className='mt-7' />
        </div>
    );
}