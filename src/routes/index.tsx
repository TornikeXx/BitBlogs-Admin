import { Route, Routes } from "react-router-dom";
import { ADMIN_ROUTES } from "./admin";
import AdminLayout from "../componens/layouts/dashboard/DashboardLayout";
import RequireAuth from "../componens/RouteGuards/RequireAuth";
import RedirectIfAuth from "../componens/RouteGuards/RedirectIfAuth";
import { AUTH_ROUTE } from "./auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<AdminLayout />}>
          {ADMIN_ROUTES}
        </Route>
      </Route>

      <Route element={<RedirectIfAuth />}>{AUTH_ROUTE}</Route>
    </Routes>
  );
};

export default AppRoutes;
