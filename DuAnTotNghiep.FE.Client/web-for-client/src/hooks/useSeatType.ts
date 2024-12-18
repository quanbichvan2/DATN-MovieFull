import { useMutation, useQuery } from "@tanstack/react-query"
// import { getAllSeatsType } from "../services/seatService"
import seatService from "../services/seatService";
import { queryClient } from "../components/AppProvider"

export const useSeatsTypeQuerry = () => {
return useQuery({
        queryFn: seatService.getAllSeatsType,
        queryKey: ['seats']
    })
}
