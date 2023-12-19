import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import AuthRedirectPage from "./pages/AuthRedirectPage";
import IdInputPage from "./pages/IdInput";
import SearchPage from "./pages/Search";
import FriendPage from "./pages/Friend";
import ChattingPage from "./pages/Chatting";

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
          { path: "id/input", element: <IdInputPage /> },
          { path: "search", element: <SearchPage /> },
          { path: "chatting", element: <ChattingPage /> },
        ],
      },
      { path: "search", element: <SearchPage /> },
      {
        path: "friend",
        children: [{ path: "", element: <FriendPage /> }],
      },
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
