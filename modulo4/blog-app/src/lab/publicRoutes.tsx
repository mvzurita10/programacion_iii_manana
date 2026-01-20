import { Home } from "../pages/Home";
import { PostDetail } from "../pages/PostDetail";
import PublicLayout from "../layauts/PublicLayout";
import type { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject = {
    path: "/",
    element: <PublicLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: "post/:id", element: <PostDetail /> },
    ],
};