
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <>
            < div className="w-full flex flex-col gap-4 relative">
                <img src="/bannerHero.png" alt="banner" />
                <div className=" w-[300px] h-[150px] max-md:w-[100px] max-md:h-[50px] max-md:text-lg absolute bg-white opacity-75 text-3xl flex justify-center items-center end-0.5 bottom-0.5 animate-bounce rounded-lg">
                    <Link to="/CitiesPage"> Travel With Us</Link>
                </div>
            </div>
        </>
    )
};

export default Hero;