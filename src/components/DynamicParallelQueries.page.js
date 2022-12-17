import { useQueries } from "react-query"
import axios from "axios"

const fetchAnimalMeat = (animalId) => {
    return axios.get(`http://localhost:4000/meats/${animalId}`)
}

export const DynamicParallelQueriesPage = ({ animalIds }) => {
    const queryResults = useQueries(
        animalIds.map((id) => {
            return {
                queryKey: ['animal-meat', id],
                queryFn: () => fetchAnimalMeat(id),
            }
        })
    )
    
    console.log(queryResults)
    return <div>DynamicParallelQueriesPage</div>
}