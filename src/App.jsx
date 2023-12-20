import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import NicknamePage from "./pages/Nickname";
import AuthPage from "./pages/Auth";
import MailSelectPage from "./pages/MailSelect";
import MailWritePage from "./pages/MailWrite";

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
          { path: "nickname", element: <NicknamePage /> },
        ],
      },
      {
        path: "mail",
        children: [
          { path: "", element: <MailSelectPage /> },
          { path: "write", element: <MailWritePage /> },
        ],
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
