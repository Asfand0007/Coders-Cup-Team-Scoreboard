import BackgroundImage from '../assets/bg.png';
import React, { useEffect, useState } from "react";
import Credits from '../components/Credits';
import TopBar from '../components/TopBar';
import { io } from "socket.io-client";
import CardSpinner from '../components/CardSpinner';


const houses = [
    "Galacticos",
    "Red Devils",
    "Gunners",
    "Culers",
];

const batches = ["21k", "22k", "23k", "24k"];

function HouseBatchScore({ house, batch, data }) {

    const getHouseColor = (house) => {
        switch (house) {
            case 'Galacticos': return 'text-blue-500/90 font-bold';
            case 'Red Devils': return 'text-red-500/90 font-bold';
            case 'Gunners': return 'text-red-500/90 font-bold';
            case 'Culers': return 'text-yellow-500/90 font-bold';
            default: return 'text-[#f7b72e]';
        }
    };

    return (
        <div className="flex justify-between items-center py-2 px-4 bg-white/5 backdrop-blur-md rounded-xl 
                        transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer
                        border border-white/10 hover:border-white/20">
            <span className={getHouseColor(house)}>Batch {batch.substring(0, 2)}</span>
            {
                data && data.length > 0 ?
                    <span className="text-white text-xl font-bold">
                        {data[house][batch]}
                    </span>
                    :
                    <CardSpinner house={house} />
            }
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
            case 'Galacticos': return 'text-[#087fd8] from-[#087fd8]/10 to-transparent';
            case 'Red Devils': return 'text-[#d81408] from-[#d81408]/10 to-transparent';
            case 'Gunners': return 'text-[#d81408] from-[#d81408]/10 to-transparent';
            case 'Culers': return 'text-[#f2c500] from-[#f7b72e]/10 to-transparent';
            default: return 'text-[#f7b72e]';
        }
    };

    return (
        <div className={`text-xl bg-black/30 w-full backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]  [box-shadow:0_8px_32px_rgba(0,0,0,0.37)] bg-gradient-to-b ${getHouseColor(house)}`}>
            <div className="p-4 border-b border-white/10">
                <div className="flex justify-between items-center">
                    <h2 className={"font-bold tracking-wider"}>{house}</h2>
                    {
                        data && data.length > 0 ? <p className="text-white  text-xl font-bold bg-white/5 px-3 py-0.5 rounded-xl transition-all duration-300 hover:bg-white/10">
                            {calculateHouseTotal()}
                        </p> : <CardSpinner house={house} />
                    }
                </div>
            </div>
            <div className="p-4 space-y-2 text-base">
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

export default function HouseStatsPage(props) {
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
            <div className="w-full bg-cover min-h-screen grid
                             place-items-center content-start 
                             justify-center overflow-x-hidden 
                             font-bold pb-20 "
                style={{ "backgroundImage": `url(${BackgroundImage})` }}>

                <TopBar />

                <div className='m-7' />

                <div className="grid sm:grid-cols-4 msm:grid-cols-2 vsm:grid-cols-1 gap-6 
                               w-[95%] sm:w-5/6 px-4 mx-auto
                               transition-all duration-300">
                    {houses.map(house => (
                        <HouseCard key={house} house={house} data={data} />
                    ))}
                </div>

            </div>
        </>
    );
} 