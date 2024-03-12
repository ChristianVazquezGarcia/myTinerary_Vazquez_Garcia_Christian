import axios  from 'axios'

const getCities = async ()=>{
    try {
        const answer = await axios("http://localhost:4000/api/cities") 
        return answer.data.data
    } catch (err) {
        return []
    }
}

export default getCities;