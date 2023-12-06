import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
// import NicknamePage from "./pages/Nickname";
import AuthPage from "./pages/Auth";
import FriendPage from "./pages/Friend";
import RootLayout from "./pages/Root";
import AuthRedirectPage from "./pages/AuthRedirectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "", element: <HomePage /> },
      {
        path: "auth",
        children: [
          { path: "", element: <AuthPage /> },
          { path: "kakao/callback", element: <AuthRedirectPage /> },
          // { path: "nickname", element: <NicknamePage /> },
        ],
      },
      {
        path: "friend",
        children: [{ path: "", element: <FriendPage /> }],
      },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
