import BackgroundImage from '../assets/bg.png';
import React, { useEffect, useState } from "react";
import TopBar from '../components/TopBar';
import { io } from "socket.io-client";
import CardSpinner from '../components/CardSpinner';
import logo1 from "../assets/arsenal-logo.png"
import logo2 from "../assets/barca-logo.png"
import logo3 from "../assets/real-logo.png"
import logo4 from "../assets/united-logo.png"

const houses = [
    "Gunners",
    "Culers",
    "Galacticos",
    "Red Devils",
];

const batches = ["21k", "22k", "23k", "24k"];

function HouseBatchScore({ house, batch, data }) {

    const getHouseColor = (house) => {
        switch (house) {
            case 'Galacticos': return 'text-white/80 font-bold';
            case 'Red Devils': return 'text-red-500/90 font-bold';
            case 'Gunners': return 'text-[#e1bd70] font-bold';
            case 'Culers': return 'text-[#e1bd70]/90 font-bold';
            default: return 'text-[#f7b72e]';
        }
    };

    return (
        <div className="flex justify-between items-center py-2 px-4 bg-white/5 backdrop-blur-md rounded-xl 
                        transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer
                        border border-white/10 hover:border-white/20">
            <span className={getHouseColor(house)}>Batch {batch.substring(0, 2)}</span>
            {
                data && Object.keys(data).length > 0 ?
                    <span className="text-xl font-bold">
                        <p className={getHouseColor(house)} >{data[house][batch]}</p>
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
        batches.forEach((batch) => { total += data[house][batch] })
        return total;
    };

    const getHouseColor = (house) => {
        switch (house) {
            case 'Galacticos': return 'text-[#ffffff]/80 from-[#087fd8]/10 to-transparent';
            case 'Red Devils': return 'text-[#d81408] from-[#000000]/30 to-transparent';
            case 'Gunners': return 'text-[#e1bd70] from-[#df1408]/30 to-[#450603]/10';
            case 'Culers': return 'text-[#e1bd70] from-[#f7b72e]/10 to-transparent';
            default: return 'text-[#f7b72e]';
        }
    };

    const getLogo = (house) => {
        switch (house) {
            case 'Galacticos': return logo3;
            case 'Red Devils': return logo4;
            case 'Gunners': return logo1;
            case 'Culers': return logo2;
            default: ;
        }
    };


    return (
        <div className={`text-xl bg-black/30 w-full backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]  [box-shadow:0_8px_32px_rgba(0,0,0,0.37)] bg-gradient-to-b ${getHouseColor(house)}`}>
            <div className="p-4 border-b border-white/10">
                <div className="flex justify-between items-center">
                    <div className='flex align-baseline'>
                        <img src={getLogo(house)} alt="" className="h-10" />
                        <h2 className={"font-bold tracking-wider mt-2 ml-2"}>
                            {house}
                        </h2>
                    </div>
                    {
                        data && Object.keys(data).length ? <p className="text-xl font-bold bg-white/5 px-3 py-0.5 rounded-xl transition-all duration-300 hover:bg-white/10">
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
            setData(housesData);
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
                               w-[95%] sm:w-5/6 px-4 mx-auto content-center
                               transition-all duration-300 vsm:h-half">
                    {
                        houses.map(house => (
                            <HouseCard key={house} house={house} data={data} />
                        ))
                    }
                </div>

            </div >
        </>
    );
} 