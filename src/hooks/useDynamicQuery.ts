import { useQuery } from "@tanstack/react-query";

export const useDynamicQuery = (queryKey: any, queryFn: any) => {
  return useQuery(queryKey, queryFn);
};
