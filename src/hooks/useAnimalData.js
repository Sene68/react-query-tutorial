import { useQuery, useMutation, useQueryClient } from "react-query"
import { request } from "../utils/axios-utils"

const fetchMeats = () => {
    // return axios.get('http://localhost:4000/meats')
    return request({ url: '/meats' })
}

const addAnimal = (animal) => {
    // return axios.post('http://localhost:4000/meats', animal)
    return request({ url: '/meats', method: 'post', data: animal })
}

export const useAnimalData = (onSuccess, onError) => {
    return useQuery(
        'meats', 
        fetchMeats,
        {
            onSuccess,
            onError,
        }
    )
}

export const useAddAnimalData = () => {
    const queryClient = useQueryClient()
    return useMutation(addAnimal, {
        onMutate: async (newAnimal) => {
            await queryClient.cancelQueries('meats')
            const previousAnimalData = queryClient.getQueryData('meats')
            queryClient.setQueryData('meats', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, { id: oldQueryData?.data?.length + 1, ...newAnimal}],
                }
            })
            return {
                previousAnimalData,
            }
        },
        onError: (_error, _animal, context) => {
            queryClient.setQueryData('meats', context.previousAnimalData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('meats')
        }
    })
}