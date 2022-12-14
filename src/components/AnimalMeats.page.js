import { useAnimalData } from "../hooks/useAnimalData"

export const AnimalMeatsPage = () => {
    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encounting error', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useAnimalData(onSuccess, onError)

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