import { supabase } from "..";

export const register = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signUp({ email, password });
};

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    const isError =
      res.error?.status !== undefined &&
      (res.error.status < 200 || res.error.status >= 300);
    if (isError) {
      throw (
        (new Error("invalid email or password"),
        alert("invalid email or password"))
      );
    }
    return res;
  });
};

export const logout = () => {
  return supabase.auth.signOut();
};
