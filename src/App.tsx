import { userAtom } from "./store/auth";
import { useEffect } from "react";
import { supabase } from "./supabase";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./componens/layouts/dashboard/DashboardLayout";
import UpdateAdminPage from "./pages/Users/Update";
import UsersListPage from "./pages/Users/List";
import SignIn from "./pages/Sign-In";
import CreateUserPage from "./pages/Users/Create";
import BlogsListPage from "./pages/Blogs/List";
import CreateBlogPage from "./pages/Blogs/Create";
import UpdateBlogPage from "./pages/Blogs/Update";
import RedirectIfAuth from "./componens/RouteGuards/RedirectIfAuth";
import RequireAuth from "./componens/RouteGuards/RequireAuth";
import { useSetAtom } from "jotai";
import AuthLayout from "./componens/layouts/auth/AuthLayout";

function App() {
  // const [user, setUser] = useAtom(userAtom);
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<AdminLayout />}>
          <Route path="users" element={<UsersListPage />} />
          <Route path="/user/:id" element={<UpdateAdminPage />} />
          <Route path="/add-user" element={<CreateUserPage />} />
          <Route path="blogs" element={<BlogsListPage />} />
          <Route path="/add-blog" element={<CreateBlogPage />} />
          <Route path="/blog/:id" element={<UpdateBlogPage />} />
        </Route>
      </Route>

      <Route element={<RedirectIfAuth />}>
        <Route
          path="login"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
