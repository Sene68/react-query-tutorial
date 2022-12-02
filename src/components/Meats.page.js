import { useState, useEffect } from "react"
import axios from "axios"

export const MeatsPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/meats').then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>Meats Page</h2>
            {data.map((meat) => {
                return <div key={meat.name}>{meat.name}</div>
            })}
        </>
    );
}