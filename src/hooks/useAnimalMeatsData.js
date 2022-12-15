import { useQuery } from "react-query";
import axios from "axios";

const fetchAnimalMeat = ({ queryKey }) => {
    const animalId = queryKey[1]
    return axios.get(`http://localhost:4000/meats/${animalId}`)
}

export const useAnimalMeatsData = (animalId) => {
    return useQuery(['animal-meats', animalId], fetchAnimalMeat)
}