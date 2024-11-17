
const CardSpinner = () => {
    return (
        <div className="grid grid-cols-1 justify-center content-center place-items-center">
            <div
                className="text-white inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
            </div>
        </div>
    );
}

export default CardSpinner;