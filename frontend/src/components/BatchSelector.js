import React from 'react';

export default function BatchSelector(props) {

    const getBatchSelectedStyle = (batchPassed) => {
        if (batchPassed == props.selectedBatch) {
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
                    props.batches.map((currBatch, index) => (
                        <li onClick={() => props.setBatch(currBatch)} class="m-auto p-2 text-center ml-0 w-full select-none rounded-full text-sm" style={getBatchSelectedStyle(currBatch)}>
                            Batch {currBatch}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}