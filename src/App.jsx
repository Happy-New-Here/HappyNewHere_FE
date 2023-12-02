import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import NicknamePage from "./pages/Nickname";
import AuthPage from "./pages/Auth";
import Friend from "./pages/Friend";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, path: "", element: <HomePage /> },
      {
        path: "auth",
        children: [
          { path: "", element: <AuthPage /> },
          { path: "kakao/callback", element: <AuthPage /> },
          { path: "nickname", element: <NicknamePage /> },
        ],
      },
      {
        path: "friend",
        children: [{ path: "", element: <Friend /> }],
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
