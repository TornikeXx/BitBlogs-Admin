import { useQuery } from "@tanstack/react-query";
import { getBlogById, getBlogs } from "../../../supabase/blogs";
import { QUERY_KEYS } from "../index.enum";

export const useGetBlogs = () => {
  return useQuery({ queryKey: [QUERY_KEYS.BLOGS], queryFn: getBlogs });
};
export const useGetBlogById = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SINGLE_BLOG],
    queryFn: () => {
      if (id) {
        return getBlogById(id);
      }
      return null;
    },
  });
};
