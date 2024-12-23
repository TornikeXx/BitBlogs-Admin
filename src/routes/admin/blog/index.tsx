import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../../../componens/loading";
import { ADMIN_PATHS } from "../index.enum";

const BlogsListPage = lazy(() => import("../../../pages/Blogs/List"));
const UpdateBlogPage = lazy(() => import("../../../pages/Blogs/Update"));
const CreateBlogPage = lazy(() => import("../../../pages/Blogs/Create"));

export const BLOGS_ROUTES = [
  <Route
    path={ADMIN_PATHS.BLOGS_LIST}
    element={
      <Suspense fallback={<Loading />}>
        <BlogsListPage />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.BLOGS_UPDATE + "/:id"}
    element={
      <Suspense fallback={<Loading />}>
        <UpdateBlogPage />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.BLOG_CREATE}
    element={
      <Suspense fallback={<Loading />}>
        <CreateBlogPage />
      </Suspense>
    }
  />,
];
