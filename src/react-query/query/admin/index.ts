/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { getAdmin, getSingleUserInAdmin, User } from "../../../supabase/admin";
import { QUERY_KEYS } from "../index.enum";

export const useGetAdmin = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  return useQuery<User[], any, T>({
    queryKey: [QUERY_KEYS.ADMINS],
    queryFn: getAdmin,
    ...queryOptions,
  });
};
export const useGetSingleUserInAdmin = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SINGLE_ADMIN, id],
    queryFn: () => {
      if (id) {
        return getSingleUserInAdmin(id);
      }
      return null;
    },
  });
};
