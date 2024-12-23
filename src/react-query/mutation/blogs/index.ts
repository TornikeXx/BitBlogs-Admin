import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBlog, Blog, updateBlog } from "../../../supabase/blogs";
import { useNavigate } from "react-router-dom";
import { MUTATION_KEYS } from "../index.enum";
import { QUERY_KEYS } from "../../query/index.enum";

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  return useMutation({
    mutationKey: [MUTATION_KEYS.UPDATE_BLOG],
    mutationFn: (params: { id: string; payload: Partial<Blog> }) =>
      updateBlog(params),
    onSuccess: () => {
      navigate("/blogs");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SINGLE_BLOG] });
    },
  });
};
export const useHandleAddBlog = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.ADD_BLOG],
    mutationFn: addBlog,
  });
};
