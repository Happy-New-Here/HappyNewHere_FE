import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/auth');
    };

    return (
        <>
            <button
                className="flex-grow-0 flex-shrink-0 w-[89px] h-[17px] text-base font-semibold text-left text-[#9a0501] hover:brightness-50 mb-8"
                onClick={logout}
            >
                로그아웃
            </button>
        </>
    );
};

export default LogoutButton;
