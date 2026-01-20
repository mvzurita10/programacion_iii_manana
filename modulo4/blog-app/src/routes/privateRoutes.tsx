import { PostList } from "../pages/private/Posts";
import { Categories } from "../pages/private/Categories";
import { Users } from "../pages/private/Users";
import Forbidden from "../pages/private/Forbidden";
import { DashboardLayout } from "../layouts/DashboardLayout";
import RequireRole from "./RequireRole";
import type { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    { index: true, element: <div>Dashboard Home</div> },
    { path: "posts", element: <PostList /> },
    { path: "categories", element: <Categories /> },
    {
      path: "users",
      element: (
        <RequireRole allow={["ADMIN"]}>
          <Users />
        </RequireRole>
      ),
    },
    { path: "forbidden", element: <Forbidden /> },
  ],
};