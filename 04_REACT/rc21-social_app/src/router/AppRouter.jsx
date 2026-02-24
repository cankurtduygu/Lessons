import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "../components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <div>feed</div> },
      { path: "profile", element: <div>profile</div> },
      { path: "friends", element: <div>friends</div> },
      { path: "messages", element: <div>message</div> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
