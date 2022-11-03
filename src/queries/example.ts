import { useQuery } from "@tanstack/react-query";
import { exampleApi } from "api/example";
import { exampleKeys } from "constants/queryKeys";

export const useExampleApi = () => {
  return useQuery(exampleKeys.example, exampleApi);
};
