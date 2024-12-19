import { supabase } from "..";

export const getAdmin = async () => {
  return supabase.auth.admin.listUsers().then((res) => {
    return res.data?.users as User[];
  });
};

export const updateUserInAdmin = (
  id: string,
  payload: { email: string; phone: string },
) => {
  return supabase.auth.admin.updateUserById(id, { ...payload });
};

export const createUser = (payload: { email: string; password: string }) => {
  return supabase.auth.admin.createUser({
    email: payload.email,
    password: payload.password,
    email_confirm: true,
    user_metadata: { role: "admin" },
  });
};

export const getSingleUserInAdmin = (id: string) => {
  return supabase.auth.admin.getUserById(id).then((res) => {
    return res.data.user;
  });
};
export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: [string];
  };
  user_metadata: object;
  identities: null;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
