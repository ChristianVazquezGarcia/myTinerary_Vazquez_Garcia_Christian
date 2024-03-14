import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import {getCityById} from "../services/citiesQueries"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Header from "../components/Header";
const Details = ()=>{
    
    const params =useParams()
    //Me falta hacer la peticion con el id que lo saco de params
    //Como se hacen las peticiones?
    //LLamo a getCityById y le paso los params, eso 
    //se debe almacenar en un estado y este debe ser cargado cuando se monta, osea uson useEffect
    const [city,setCity]=useState({})

    {/*Creo el loaded porq eso me va a atajar un posible error */}
    const [loaded, setLoaded]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        getCityById(params.id)
        .then((ans)=>
        {
            
            if (ans.name) {
                
                setCity(ans);
            }
            else {
                Swal.fire("There is no city with that name");
                navigate ("/CitiesPage") ;
                }
            }
        )
        .finally(()=>setLoaded(false))
    },[])

    //Ya tengo los datos, ahora solo debo mostrar las  cards
    //Tengo que contemplar si falla algo del bakend
    //si loaded queda en true
    
    if (loaded) {
        return ( 
        
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
            
            <h2 className="font-bold text-3xl text-white animate-bounce">Loaded....</h2>
        
        
        </div>
        )
        
    }
    
   
    return(
        <>
        <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-11/12 flex flex-col justify-center items-center gap-5">
            {/*Me falta acomodar la estetica */}
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