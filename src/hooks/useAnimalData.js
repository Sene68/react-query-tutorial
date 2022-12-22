import { useQuery, useMutation, useQueryClient } from "react-query"
import axios from "axios"

const fetchMeats = () => {
    return axios.get('http://localhost:4000/meats')
}

const addAnimal = (animal) => {
    return axios.post('http://localhost:4000/meats', animal)
}

export const useAnimalData = (onSuccess, onError) => {
    return useQuery(
        'meats', 
        fetchMeats,
        {
            onSuccess,
            onError,
        }
    )
}

export const useAddAnimalData = () => {
    const queryClient = useQueryClient()
    return useMutation(addAnimal, {
        onSuccess: () => {
            queryClient.invalidateQueries('meats')
        }
    })
}