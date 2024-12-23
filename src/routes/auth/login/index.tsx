import { Route } from "react-router-dom";
import AuthLayout from "../../../componens/layouts/auth/AuthLayout";
import { lazy, Suspense } from "react";
import Loading from "../../../componens/loading";
import { AUTH_PATHS } from "../index.enum";

const LogInPage = lazy(() => import("../../../pages/Sign-In"));

export const LOGIN_ROUTE = [
  <Route
    path={AUTH_PATHS.LOG_IN}
    element={
      <AuthLayout>
        <Suspense fallback={<Loading />}>
          <LogInPage />
        </Suspense>
      </AuthLayout>
    }
  />,
];
