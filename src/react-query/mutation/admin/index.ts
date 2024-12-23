import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../../supabase/admin";
import { MUTATION_KEYS } from "../index.enum";

export const useCreateUser = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.CREATE_USER],
    mutationFn: createUser,
  });
};
