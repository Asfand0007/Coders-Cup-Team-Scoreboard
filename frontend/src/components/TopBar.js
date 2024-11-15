import logo from "../assets/logo (With Sponsors).png"
import logo1 from "../assets/arsenal-logo.png"
import logo2 from "../assets/barca-logo.png"
import logo3 from "../assets/real-logo.png"
import logo4 from "../assets/united-logo.png"

const TopBar = () => {
    return (
        <div className="bg-gradient-to-r from-black/20 via-black to-black/20 backdrop:blur-xl w-screen justify-center content-center flex ">
            <div className="w-fit text-center flex sm:gap-9 vsm:gap-4 gap-0 justify-center items-center content-center ">
                <div className="w-fit text-center flex sm:gap-9 vsm:gap-4 gap-0 justify-center items-center content-center [transition:all_0.4s_ease] hover:scale-110">
                    <img src={logo1} alt="" className="sm:h-16  vsm:h-14 h-10" />
                </div>

                <div className="w-fit text-center flex sm:gap-9 vsm:gap-4 gap-0 justify-center items-center content-center [transition:all_0.4s_ease] hover:scale-110">
                    <img src={logo2} alt="" className="sm:h-16 vsm:h-14 h-10 " />
                </div>
                <div className="w-fit text-center flex sm:gap-9 vsm:gap-4 gap-0 p-3 justify-center items-center content-center [transition:all_0.4s_ease] hover:scale-110">
                    <img src={logo} alt="" className="sm:h-32 h-24" />
                </div>
                <div className="w-fit text-center flex sm:gap-9 vsm:gap-4 gap-0 justify-center items-center content-center [transition:all_0.4s_ease] hover:scale-110">
                    <img src={logo3} alt="" className="sm:h-16 vsm:h-14 h-10" />
                </div>
                <div className="w-fit text-center flex sm:gap-9 vsm:gap-4 gap-0 justify-center items-center content-center [transition:all_0.4s_ease] hover:scale-110">
                    <img src={logo4} alt="" className="sm:h-16 vsm:h-14 h-10" />
                </div>
            </div>
        </div>
    );
}

export default TopBar;