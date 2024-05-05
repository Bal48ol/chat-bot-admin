import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getPrompt, updatePrompt} from "../api/api.ts";


const getKey = (type: string) => `prompt-${type}`;

export const usePrompt = (type: string) => {
  const client = useQueryClient();
  const {data, error, isLoading} = useQuery({
    queryFn: async () => await getPrompt(type),
    queryKey: [getKey(type)],
  });

  const invalidate = async () => {
    await client.invalidateQueries({
      queryKey: [getKey(type)]
    });
  }
  
  const update = async (value: string) => {
    await updatePrompt(type, value);
    await invalidate();
  }

  return {
    data,
    isLoading,
    error,
    invalidate,
    update
  }
}