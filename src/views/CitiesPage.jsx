import Layout from "../components/Layout";
import { getCities } from "../services/citiesQueries";
import Cards from "../components/Cards"
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {filteredCities, load} from "../Redux/actions/citiesActions";
const CitiesPage = () => {
    
    const searchInput = useRef(null)
    const dispatch = useDispatch()
    
    
    //Traigo del store todas las ciudades
    const filtered = useSelector((store)=>store.cities.filtered)
    useEffect(() => {
        getCities().then((data) => {
            dispatch(load(data)); //Despacho al action la info de las cities
    })}, [])

    const handleInput = () => {
        dispatch(filteredCities(searchInput.current.value))
    }

    //const filteredCities = (list, value) => list.filter((element) => element.name.toLowerCase().startsWith(value.toLowerCase().trim()));

    return (
        <>
            <Layout props={"gap-4"}>
                <search className="w-[80%] md:py-10">
                    <input className="bg-stone-600 w-full rounded-lg text-center text-white gap-4" type="text" name="city_name" placeholder="Search your city...." ref={searchInput} onInput={handleInput} />
                </search>
                <div className="flex flex-wrap w-full px-12 max-md:px-4 max-md:gap-6 gap-4 justify-center">
                    {/* imprimo */}
                    {filtered.length > 0 ? filtered.map((capital) => <Cards key={capital.id} props={capital} style={"md:absolute animate-pulse opacity-90"} />) : <h2 className="py-16 px-8 max-md:text-2xl text-3xl font-bold italic font-mono border-2 flex items-center"> City not found </h2>}
                </div>
            </Layout>
        </>
    );
}

export default CitiesPage;