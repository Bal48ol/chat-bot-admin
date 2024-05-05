import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getStatisticsAsync} from "../api/api.ts";

const key = "statistics";

export const useStatistics = () => {
    const client = useQueryClient();
    const {data, error, isLoading} = useQuery({
       queryFn: async () => await getStatisticsAsync(),
       queryKey: [key], 
    });
    
    const invalidate = async () => {
      await client.invalidateQueries({
        queryKey: [key]
      });
    }
    
    return {
        data,
        isLoading,
        error,
        invalidate
    }
}