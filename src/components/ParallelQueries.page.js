import { useQuery } from "react-query"
import axios from "axios"

const fetchAnimalMeat = () => {
    return axios.get('http://localhost:4000/meats')
}

const fetchOwners = () => {
    return axios.get('http://localhost:4000/owner')
}

export const ParallelQueriesPage = () => {
    const { data: animalMeat } = useQuery('animalMeat', fetchAnimalMeat)
    const { data: owners } = useQuery('owners', fetchOwners)

    return <div>ParallelQueriesPage</div>
}