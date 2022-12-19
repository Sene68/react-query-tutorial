import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchAnimalMeat = ({ queryKey }) => {
    const animalId = queryKey[1]
    return axios.get(`http://localhost:4000/meats/${animalId}`)
}

export const useAnimalMeatsData = (animalId) => {
    const queryClient = useQueryClient()
    return useQuery(['animal-meats', animalId], fetchAnimalMeat, {
        initialData: () => {
            const animal = queryClient.getQueryData('animal-meats')?.data?.find((animal) => animal.id === parseInt(animalId))

            if (animal) {
                return {
                    data: animal
                }
            } else {
                return undefined
            }
        }
    })
}