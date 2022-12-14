import { useQuery } from "react-query"
import axios from "axios"

const fetchMeats = () => {
    return axios.get('http://localhost:4000/meats')
}

export const useAnimalData = (onSuccess, onError) => {
    return useQuery(
        'meats', 
        fetchMeats,
        {
            onSuccess,
            onError,
            select: (data) => {
                const animalName = data.data.map(animal => animal.animalName)
                return animalName
            }
        }
    )
}