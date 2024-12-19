import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  //   import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_SERVICE_ROLE,
  //   import.meta.env.VITE_SUPABASE_ANON_KEY,
);