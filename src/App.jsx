import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import IdPage from './pages/Id';
import AuthPage from './pages/Auth';
import FriendPage from './pages/Friend';
import Root from './pages/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, path: '', element: <HomePage /> },
            {
                path: 'auth',
                children: [
                    { path: '', element: <AuthPage /> },
                    { path: 'kakao/callback', element: <AuthPage /> },
                    { path: 'id', element: <IdPage /> },
                ],
            },
            {
                path: 'friend',
                children: [{ path: '', element: <FriendPage /> }],
            },
            { path: 'search', element: <SearchPage /> },
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
