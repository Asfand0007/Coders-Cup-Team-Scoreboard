import React from 'react';

export default function HouseSelector(props) {

    const getHouseSelectedStyle = (housePassed) => {
        if (housePassed == props.selectedHouse) {
            if (housePassed.toUpperCase() == "GALACTICOS") {
                return { backgroundColor: "#087fd8", opacity: 0.8, };
            }

            if (housePassed.toUpperCase() == "RED DEVILS") {
                return { backgroundColor: "#d81408", opacity: 0.8 };
            }

            if (housePassed.toUpperCase() == "GUNNERS") {
                return { backgroundColor: "#d81408", opacity: 0.8 };
            }

            if (housePassed.toUpperCase() == "CULERS") {
                return { backgroundColor: "#f2c500", opacity: 0.8 };
            }




            return { backgroundColor: "#f7b72e", opacity: 0.8 };
        }
        else {
            return { backgroundColor: 'transparent', color: "white" }
        }
    }

    return (
        <>
            <ul className='inline-flex h-12 w-4/6 border-4 border-black/10 bg-black/40 shadow-sm backdrop-blur-lg  rounded-full justify-between content-between'>

                {
                    props.houses.map((currHouse, index) => (
                        <li onClick={() => props.setHouse(currHouse)} className="m-auto p-2 overflow-y-clip text-center ml-0 w-full select-none rounded-full text-sm" style={getHouseSelectedStyle(currHouse)}>
                            {currHouse}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}