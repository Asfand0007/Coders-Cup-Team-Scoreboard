import BackgroundImage from '../assets/bg.png';
import React, { useEffect, useState } from "react";
import Credits from '../components/Credits';
import TopBar from '../components/TopBar';
import { io } from "socket.io-client";

const houses = [
    "Galacticos",
    "Red Devils",
    "Gunners",
    "Culers",
];

const batches = ["21k", "22k", "23k", "24k"];

function HouseBatchScore({ house, batch, data }) {
    return (
        <div className="flex justify-between items-center py-2 px-4 bg-white/5 backdrop-blur-md rounded-xl 
                        transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer
                        border border-white/10 hover:border-white/20">
            <span className="text-[#f7b72e] vsm:text-xs text-[10px] font-bold">Batch {batch.substring(0, 2)}</span>
            <span className="text-white vsm:text-xs text-[10px] font-bold">{data[house][batch]}</span>
        </div>
    );
}

function HouseCard({ house, data }) {
    const calculateHouseTotal = () => {
        let total = 0;
        batches.map((x) => { total += data[house][x] })
        return total;
    };

    const getHouseColor = (house) => {
        switch (house) {
            case 'Galacticos': return 'text-[#087fd8] from-[#087fd8]/30 to-transparent';
            case 'Red Devils': return 'text-[#d81408] from-[#d81408]/30 to-transparent';
            case 'Gunners': return 'text-[#d81408] from-[#f2c500]/30 to-transparent';
            case 'Culers': return 'text-[#f2c500] from-[#f7b72e]/30 to-transparent';
            default: return 'text-[#f7b72e]';
        }
    };

    return (
        Object.keys(data).length !== 0 ?
            <div className={`bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-white/10 hover:border-white/20 [box-shadow:0_8px_32px_rgba(0,0,0,0.37)] bg-gradient-to-b ${getHouseColor(house)}`}>
                <div className="p-4 border-b border-white/10">
                    <div className="flex justify-between items-center">
                        <h2 className={"vsm:text-xl text-lg font-bold tracking-wider"}>{house}</h2>
                        <p className="text-white vsm:text-2xl text-xl font-bold bg-white/5 px-3 py-0.5 rounded-xl transition-all duration-300 hover:bg-white/10">
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
            </div> :
            <div>
                h2</div>
    );
}

export default function HouseStatsPage() {
    const [data, setData] = useState({});

    useEffect(() => {
        const socket = io("http://localhost:4000/");
        socket.emit("joinRoom", "Houses");
        socket.on("sendData", (housesData) => {
            try {
                setData(housesData);
                console.log("Data", data);
            } catch (error) {
                console.error("Error parsing data:", error);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, []);

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
                        <HouseCard key={house} house={house} data={data} />
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