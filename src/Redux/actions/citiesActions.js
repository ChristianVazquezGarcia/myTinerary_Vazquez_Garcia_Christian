
import { createAction } from "@reduxjs/toolkit";

export const load = createAction('loadCities', (cities)=>{
    return{
        payload : cities,
    }
})

export const filteredCities = createAction('filteredCities', (value)=>{
    return{
        payload : value,
    }
})