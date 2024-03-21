import axios  from 'axios'

export const getCities = async ()=>{
    try {
        const answer = await axios("http://localhost:4000/api/cities") 
        return answer.data.data
    } catch (err) {
        return []
    }
}

export const getCityById = async ( id )=>{
    try {
        const answer = await axios("http://localhost:4000/api/cities/" + id) 
        return answer.data.data
    } catch (err) {
        return {}
    }
}

export const getItineraries = async ( id ) =>{
    try {
        const answer = await axios ( "http://localhost:4000/api/itineraries/city/" + id )
        return answer.data.data
    } catch (error) {
        return[]
    }
}


export const getAllCountries = async() => {
    try {
        const {data} = await axios( 'https://restcountries.com/v3.1/all?fields=name' )
        const countries = data.map( e => e.name.common )
        return countries.sort()
    } catch (error) {
        return []
    }

}

