import { useQuery } from "react-query"
import axios from "axios"

const fetchMeats = () => {
    return axios.get('http://localhost:4000/meats')
}

export const AnimalMeatsPage = () => {

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encounting error', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
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

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>Animal Meats Page</h2>
            <button onClick={refetch}>Fetch Animals</button>
            {
                data.map(animalName => {
                    return <div key={animalName}>{animalName}</div>
                })
            }
        </>
    );
}