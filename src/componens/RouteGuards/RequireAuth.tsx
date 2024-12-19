import { useAtomValue } from "jotai";
import { userAtom } from "../../store/auth";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const user = useAtomValue(userAtom);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
