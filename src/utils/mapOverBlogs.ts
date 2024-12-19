import { Blog } from "../supabase/blogs";
import { formatDate } from "./formatDate";

export const mapOverBlogs = (blogs: Blog[]) => {
  return blogs?.map((blog) => ({
    created_at: formatDate(blog.created_at),
    description_en: blog?.description_en,
    title_en: blog?.title_en,
    id: blog?.id,
    //   key: user?.id,
  }));
};
