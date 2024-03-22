import React, { useState, useEffect } from "react"

import Cards from "./Cards";
import { cities } from "../data/data"

const Carroussel = ({ props }) => {
    let city = cities.slice(0, 12);
    const [count, setcount] = useState(0);
    const [capital, setcapital] = useState(city[count]);
    const [capital1, setcapital1] = useState(city[count + 1]);
    const [capital2, setcapital2] = useState(city[count + 2]);
    const [capital3, setcapital3] = useState(city[count + 3]);

    const next = () => {
        let newCount = count + 4;
        if (newCount > city.length - 1) {
            newCount = 0;
        }
        setcapital(city[newCount]);
        setcapital1(city[newCount + 1]);
        setcapital2(city[newCount + 2]);
        setcapital3(city[newCount + 3]);
        setcount(newCount);
    };

    const prev = () => {
        let newCount = count;
        if (newCount <= 0) {
            newCount = 12;
        }
        setcapital(city[newCount - 4]);
        setcapital1(city[newCount - 3]);
        setcapital2(city[newCount - 2]);
        setcapital3(city[newCount - 1]);
        setcount(newCount - 4);
    };

    useEffect(() => {
        const idInterval = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(idInterval);
    }, [count]);

    return (
        <>
            <div className="flex justify-center gap-4 max-lg:w-[80%] pb-16 ">
                <div className="flex flex-col w-full items-center">
                    <h4 className="text-3xl font-bold italic py-4">Popular MyTineraries</h4>
                    <div className="flex  w-full max-lg:gap-1 gap-4 justify-center">
                        <button className="text-3xl rounded-full" onClick={prev}>⬅</button>
                        <div className="w-[95%] gap-2 max-lg:w-screen max-lg:justify-center max-md:w-screen flex flex-wrap justify-around max-lg:gap-5  ">
                            <Cards props={capital} style={"opacity-25"} />
                            <Cards props={capital1} style={"opacity-25"} />
                            <Cards props={capital2} style={"opacity-25"} />
                            <Cards props={capital3} style={"opacity-25"} />
                        </div>
                        <button className="text-3xl rounded-full" onClick={next}>➡ </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carroussel;


