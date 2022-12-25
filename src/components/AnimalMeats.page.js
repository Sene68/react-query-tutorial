import { useState } from "react"
import { Link } from "react-router-dom"
import { useAddAnimalData, useAnimalData } from "../hooks/useAnimalData"

export const AnimalMeatsPage = () => {
    const [name, setName] = useState('')
    const [animalName, setAnimalName] = useState('')

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encounting error', error)
    }

    const { isLoading, data, isError, error, refetch } = useAnimalData(onSuccess, onError)

    const { mutate: addAnimal } = useAddAnimalData()

    const handleAddAnimalClick = () => {
        console.log({ name, animalName })
        const animal = { name, animalName }
        addAnimal(animal)
    }

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>Animal Meats Page</h2>
            <div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' value={animalName} onChange={(e) => setAnimalName(e.target.value)} />
                <button onClick={handleAddAnimalClick}>Add Animal</button>
            </div>
            <button onClick={refetch}>Fetch Animals</button>
            {
                data?.data.map((animal) => {
                    return <div key={animal.id}>
                        <Link to={`/animal-meats/${animal.id}`}>{animal.animalName}</Link>
                        </div>
                })
            }
            {/* {
                data.map(animalName => {
                    return <div key={animalName}>{animalName}</div>
                })
            }*/}
        </> 
    );
}