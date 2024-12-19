import { User } from "@supabase/supabase-js";
import { formatDate } from "./formatDate";

export const mapOverAdminsInfo = (users: User[]) => {
  return users?.map((user) => ({
    email: user?.email,
    createdAt: formatDate(user?.created_at),
    phone: user?.phone,
    id: user?.id,
    key: user?.id,
  }));
};
