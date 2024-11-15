import React from "react";

export default function Credits() {
    return (
        <div className="group relative m-1 flex justify-center">
            <div className="rounded-full text-xs border-[#f7b72e] border-2 font-bold bg-black/5 backdrop-blur-md py-1 px-2.5 text-[#f7b72e] shadow-sm">
                ?
            </div>
            <span className="vsm:w-56 w-48 absolute bottom-10 right-5 scale-0 rounded-lg border-4 border-black/10 bg-black/10 p-4 vsm:text-s text-xs text-[#d6d6d6] group-hover:scale-100 backdrop-blur-md shadow-sm">
                <p className="font-bold vsm:text-lg text-base text-[#f7b72e] mb-0.5">
                    Developed By
                </p>
                <p className="ml-3">
                    • Asfand Khanzada
                </p>
                <p className="ml-3">
                    • Sarim Ahmed
                </p>
                <p className="ml-3">
                    • Burhanuddin Khatri
                </p>
                <p className="ml-3">
                    • Munazzar Shahzad
                </p>
            </span>
        </div>

    );
}