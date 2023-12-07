import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import IdInputPage from "./pages/IdInput";
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
            { index: true, path: '', element: <HomePage /> },
            {
                path: "login",
                children: [
                    { path: "", element: <AuthPage /> },
                    { path: "kakao/callback", element: <AuthRedirectPage /> },
                    { path: "id/input", element: <IdInputPage /> },
                ],
            },
            {
                // path: 'mail',
                // children: [
                //     { path: '', element: <MailSelectPage /> },
                //     { path: 'write', element: <MailWritePage /> },
                // ],
            },
            { path: 'search', element: <SearchPage /> },
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
