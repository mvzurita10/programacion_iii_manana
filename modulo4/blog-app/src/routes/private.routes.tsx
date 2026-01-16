import type { RouteObject } from "react-router-dom";
import DashboardHome from "../pages/private/DashboardHome";
import PrivatePlaceholder from "../pages/private/PrivatePlaceholder";
import CategoriesPage from "../pages/private/CategoriesPage";
import PostsPage from "../pages/private/PostsPage";

export const privateRoutes: RouteObject = {
    path: "/dashboard",
    children: [
        { index: true, element: <DashboardHome /> },
        { path: "categories", element: <CategoriesPage /> },
        { path: "posts", element: <PostsPage /> },
        { path: "users", element: <PrivatePlaceholder title="Users" /> },
    ],
};