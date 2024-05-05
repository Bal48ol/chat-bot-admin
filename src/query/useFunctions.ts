import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getFunctionsAsync} from "../api/api.ts";

const key = "functions";

export const useFunctions = () => {
  const client = useQueryClient();
  const {data, error, isLoading} = useQuery({
    queryFn: async () => await getFunctionsAsync(),
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
    invalidate,
  }
}