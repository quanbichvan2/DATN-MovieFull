import { useMutation, useQuery } from "@tanstack/react-query"
import { createSeatType, getAllSeatsType, UpdateSeatType } from "../services/seatService"
import { queryClient } from "../components/AppProvider"
import { SeatType } from "../models/seatDto"
import instance from "../apis/base"

export const useSeatsTypeQuerry = () => {
return useQuery({
        queryFn: getAllSeatsType,
        queryKey: ['seats']
    })
}

export const useAddSeatMutation  = () => {
    return useMutation({
        mutationFn: createSeatType,
        onSuccess: () =>{
            queryClient.invalidateQueries(['seats'])
        }
    })
}

export const useUpdateSeatMutation  = () => {
    return useMutation({
        mutationFn: async ({seatForm ,id}:{seatForm: SeatType, id: string})=> {
            instance.put(`/movie-management-module/SeatTypes/${id}`,seatForm)
        },
        onSuccess: () =>{
            queryClient.invalidateQueries(['seats'])
        }
    })
}