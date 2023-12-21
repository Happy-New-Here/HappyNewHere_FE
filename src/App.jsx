import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import AuthRedirectPage from "./pages/AuthRedirectPage";
import IdPage from "./pages/Id";
import SearchPage from "./pages/Search";
import FriendPage from "./pages/Friend";
import ChattingPage from "./pages/Chatting";

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
  { path: "chatting", element: <ChattingPage /> },
  { path: "friend/:userId", element: <FriendPage /> },
]);


function App() {  
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
