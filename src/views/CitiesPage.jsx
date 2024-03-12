import Layout from "../components/Layout";
import getCities from "../services/citiesQueries";
import Cards from "../components/Cards" 
import { useEffect, useState } from "react";
const CitiesPage =()=>{
    
    const [ciudad,setCiudad]=useState([])

    useEffect(()=>{
        getCities().then((setCiudad))
    },[])
    
    return (
        <>
        <Layout>
            <div className="flex flex-wrap w-full px-12 max-md:px-4 max-md:gap-4 justify-center">
            {ciudad.length>0 && ciudad.map((capital)=><Cards key={capital.id} props={capital} />)}
            </div>
        </Layout>
        </>
    );
}

export default CitiesPage;