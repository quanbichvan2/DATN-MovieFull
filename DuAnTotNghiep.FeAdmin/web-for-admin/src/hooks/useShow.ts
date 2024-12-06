import { useMutation, useQuery } from "@tanstack/react-query"
import { addShow, getAllShows } from "../services/showService"
import { queryClient } from "../components/AppProvider"

export const useShowQuery =  ()=> {
    return useQuery({
        queryKey:['shows'],
        queryFn: getAllShows
    })
}

export const useAddShowMutation = () => {
    return useMutation({
        mutationFn: addShow,
        onSuccess: () => {
            queryClient.invalidateQueries(['shows'])
        }
    })
}