import About from "pages/About";
import Login from "pages/Login";
import PostId from "pages/PostId";
import Posts from "pages/Posts";

export const privateRoutes = [
  { path: "/about", component: <About />, exact: false },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostId />, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: <Login />, exact: true },
];
