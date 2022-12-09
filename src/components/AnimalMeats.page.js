import { useQuery } from "react-query"
import axios from "axios"

const fetchMeats = () => {
    return axios.get('http://localhost:4000/meats')
}

export const AnimalMeatsPage = () => {
    const { isLoading, data, isError, error } = useQuery(
        'meats', 
        fetchMeats,
        {
            refetchOnMount: true,
            refetchOnWindowFocus: 'always',
        }
    )

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>Animal Meats Page</h2>
            {data?.data.map((meat) => {
                return <div key={meat.animalName}>{meat.animalName}</div> 
            })}
        </>
    );
}