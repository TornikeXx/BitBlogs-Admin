import { useAtomValue } from "jotai";
import { userAtom } from "../../store/auth";
import { Navigate, Outlet } from "react-router-dom";

const RedirectIfAuth = () => {
  const user = useAtomValue(userAtom);

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectIfAuth;
