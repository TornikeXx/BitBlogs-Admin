import { supabase } from "..";

export const getBlogs = async () => {
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data as Blog[];
};

export const addBlog = async (payload: uploadPayload) => {
  const { data, error } = await supabase.from("blogs").insert({
    title_en: payload.title_en,
    description_en: payload.description_en,
  });
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateBlog = async ({
  id,
  payload,
}: {
  id: string;
  payload: Partial<Blog>;
}) => {
  const { data, error } = await supabase
    .from("blogs")
    .update(payload)
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getBlogById = async (id: string) => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export type Blog = {
  created_at: string;
  description_en: string;
  description_ka: string;
  id: number;
  image_url: string;
  title_en: string;
  title_ka: string;
  user_id: string;
};

export type uploadPayload = {
  title_en: string;
  description_en: string;
  created_at?: string;
};
