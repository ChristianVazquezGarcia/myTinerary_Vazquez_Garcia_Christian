import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { getCityById, getItineraries } from "../services/citiesQueries"
import Itineries from "../components/Itineraries";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";

const Details = () => {

    const params = useParams()
    const [city, setCity] = useState([])
    const [loaded, setLoaded] = useState(true)
    const navigate = useNavigate()

    //Me traigo las ciudades del store
    const filtered = useSelector((store)=>store.cities.all)
    console.log(filtered);
    const cite=filtered.filter((cities)=>cities._id==params.id)
    console.log(params.id);
    console.log(cite);
    useEffect(() => {
        getItineraries(params.id)//le paso el id param al axios, con el param del busco en la ciudad esa si tiene itinerario
            .then((ans) => {
                console.log(ans);
                
                if (ans!=[]) {
                    setCity(ans);
                }
                else {
                    Swal.fire("There is no city with that name");
                    navigate("/CitiesPage");
                }
            }
            )
            .finally(() => setLoaded(false))
    }, [])
     console.log(city);
    if (loaded) {
        return (

            <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
                <h2 className="font-bold text-3xl text-white animate-bounce">Loaded....</h2>
            </div>
        )

    }

    if (city.itineraries!=0) {
        return(
            <div className="w-screen h-screen flex justify-center items-center bg-gray-700">
                <div className="w-11/12 flex flex-col justify-center items-center gap-5  text-white">
                    <img className="w-[50%] max-md:w-[80%] self-center rounded-lg" src={cite.image} alt="city image" />
                    <h3 className="font-sans text-3xl">{cite.name}</h3>
                    <Link className="underline" to="/CitiesPage">Cities</Link>
                    <h5>{city.guide}</h5>
                    <div className="flex gap-6 max-md:flex-col">
                    <Itineries props = {city} />
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-gray-700">
                <div className="w-11/12 flex flex-col justify-center items-center gap-5  text-white">
                    <img className="w-[50%] max-md:w-[80%] self-center rounded-lg" src={cite.image} alt="city image" />
                    <h3 className="font-sans text-3xl">{cite.name}</h3>
                    <Link className="underline" to="/CitiesPage">Cities</Link>
                    <h2>UNDER CONSTRUCTION</h2>
                    

                </div>
            </div>
        </>
    )
}

export default Details;