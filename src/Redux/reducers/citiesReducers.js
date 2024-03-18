import {load, filteredCities} from "../actions/citiesActions"
import {createReducer} from "@reduxjs/toolkit";

//Creo un objeto dentro de initialState que tiene un array vacio
const initialState = {
    all: [],
    filtered:[]
}

const reducer = createReducer(initialState,(builder)=>{
    builder.addCase (load, (state, action)=>{
        
            const copyState = {...state};
            copyState.all = action.payload
            copyState.filtered=action.payload
            return copyState
            {/*El addCase va a estar "prestando atencion" al load,
             recibe el estado original 
            y la funcion del action
            Hace una copia del state como este (en este caso esta con el all vacio) y a all le asigna lo que tenia el action en 
            la propiedad payload */}
        

    })
    
    builder.addCase (filteredCities, (state, action)=>{
        
        const aux = state.all.filter((city) => city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()));
        return {...state, filtered:aux}
    })
    
    
})

export default reducer;