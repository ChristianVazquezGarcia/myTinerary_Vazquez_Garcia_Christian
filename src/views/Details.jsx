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
    const cite=filtered.filter((cities)=>cities._id==params.id)
    let cityDetail = cite.map((city)=>city.country)
    let cityDetailImage= cite.map((city)=>city.image)
    let citiItinierary=cite.map((city)=>city.itineraries)
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
    if (loaded) {
        return (

            <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
                <h2 className="font-bold text-3xl text-white animate-bounce">Loaded....</h2>
            </div>
        )

    }
    if (citiItinierary!=0) {
        return(
            <div className="w-screen h-auto flex flex-col justify-between items-center bg-gray-700">
                <img className="w-[25%] max-md:w-[80%] rounded-lg" src={cityDetailImage} alt="city image" />
                <div className="w-11/12 flex flex-col justify-center items-center gap-5  text-white">
                    <h3 className="font-sans text-3xl">{cityDetail}</h3>
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
                    <img className="w-[50%] max-md:w-[80%] self-center rounded-lg" src={cityDetailImage} alt="city image" />
                    <h3 className="font-sans text-3xl">{cityDetail}</h3>
                    <Link className="underline" to="/CitiesPage">Cities</Link>
                    <h2>There are no itineraries available</h2>
            </div>
            </div>
        </>
    )
}

export default Details;