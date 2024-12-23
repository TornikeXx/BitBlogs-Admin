import { useMutation } from "@tanstack/react-query";
import { login, logout } from "../../../supabase/auth";
import { useNavigate } from "react-router-dom";
import { MUTATION_KEYS } from "../index.enum";

export const useHandleLogIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [MUTATION_KEYS.LOGIN],
    mutationFn: login,
    onSuccess: () => {
      navigate("/");
    },
  });
};
export const useHandleLogOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [MUTATION_KEYS.LOGOUT],
    mutationFn: logout,
    onSuccess: () => navigate("/login"),
  });
};
