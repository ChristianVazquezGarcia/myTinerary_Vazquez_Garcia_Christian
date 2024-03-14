import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { getCityById } from "../services/citiesQueries"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Details = () => {

    const params = useParams()
    const [city, setCity] = useState({})
    const [loaded, setLoaded] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        getCityById(params.id)
            .then((ans) => {

                if (ans.name) {

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


    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-gray-700">
                <div className="w-11/12 flex flex-col justify-center items-center gap-5  text-white">
                    <img className="w-[50%] max-md:w-[80%] self-center rounded-lg" src={city.image} alt="city image" />
                    <h3 className="font-sans text-3xl">{city.name}</h3>
                    <Link className="underline" to="/CitiesPage">Cities</Link>
                    <h2>UNDER CONSTRUCTION</h2>

                </div>
            </div>
        </>
    )
}

export default Details;