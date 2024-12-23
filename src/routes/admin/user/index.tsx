import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../../../componens/loading";
import { ADMIN_PATHS } from "../index.enum";

const UsersListPage = lazy(() => import("../../../pages/Users/List"));
const UpdateAdminPage = lazy(() => import("../../../pages/Users/Update"));
const CreateUserPage = lazy(() => import("../../../pages/Users/Create"));

export const USERS_ROUTES = [
  <Route
    path={ADMIN_PATHS.USERS_LIST}
    element={
      <Suspense fallback={<Loading />}>
        <UsersListPage />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.USERS_UPDATE + "/:id"}
    element={
      <Suspense fallback={<Loading />}>
        <UpdateAdminPage />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.USER_CREATE}
    element={
      <Suspense fallback={<Loading />}>
        <CreateUserPage />
      </Suspense>
    }
  />,
];
