import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import AuthRedirectPage from "./pages/AuthRedirectPage";
import IdPage from "./pages/Id";
import SearchPage from "./pages/Search";
import FriendPage from "./pages/Friend";
import ChattingPage from "./pages/Chatting";
import EditProfilePage from "./pages/EditProfile";
import InfoPage from "./pages/Info";

const router = createBrowserRouter([
  { index: true, path: "/", element: <HomePage /> },
  {
    path: "auth",
    children: [
      { path: "", element: <AuthPage /> },
      { path: "kakao/callback", element: <AuthRedirectPage /> },
      { path: "id/input", element: <IdPage /> },
    ],
  },
  { path: "search", element: <SearchPage /> },
  { path: ":userId", element: <FriendPage /> },
  { path: "chatting", element: <ChattingPage /> },
  { path: "editprofile", element: <EditProfilePage /> },
  { path: "manual", element: <InfoPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
