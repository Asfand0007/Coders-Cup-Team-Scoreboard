import BackgroundImage from '../assets/bg.png';
import React, { useState } from "react";
import TopBar from '../components/TopBar';
import ScoreTable from '../components/ScoreTable';

var batches = [
    "21k",
    "23k",
]

export default function HomePage() {
    const [batch, setBatch] = useState(batches[0]);

    const getBatchSelectedStyle = (batchPassed) => {
        if (batchPassed == batch) {
            return { backgroundColor: "#f7b72e", opacity: 0.8 };
        }
        else {
            return { backgroundColor: 'transparent', color: "white" }
        }
    }

    return (
        <div className="w-full bg-cover h-screen grid place-items-center content-start overflow-x-hidden overflow-y-scroll font-bold" 
             style={{ "backgroundImage": `url(${BackgroundImage})` }}>
            <TopBar />

            <div className='mt-4' />

            <ul className='inline-flex h-12 w-4/6 border-4 border-black/10 bg-black/40 shadow-sm backdrop-blur-lg rounded-full justify-between content-between'>
                {
                    batches.map((currBatch, index) => (
                        <li onClick={() => setBatch(currBatch)} className="m-auto p-2 text-center ml-0 w-full select-none rounded-full text-sm" style={getBatchSelectedStyle(currBatch)}>
                            Batch {currBatch}
                        </li>
                    ))
                }
            </ul>

            <div className='mt-4' />

            <div className='w-screen content-center justify-center flex'>
                <div className='w-5/6 h-96'>
                    <ScoreTable room={batch} />
                </div>
            </div>

            <div className='mt-7' />
        </div>
    );
}