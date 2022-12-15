import { useParams } from "react-router-dom"
import { useAnimalMeatsData } from "../hooks/useAnimalMeatsData"

export const AnimalMeat = () => {
    const { animalId } = useParams()
    const { isLoading, data, isError, error } = useAnimalMeatsData(animalId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {data?.data.name} - {data?.data.animalName}
        </div>
    )
}