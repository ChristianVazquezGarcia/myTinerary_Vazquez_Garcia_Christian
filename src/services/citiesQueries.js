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