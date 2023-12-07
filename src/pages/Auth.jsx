import { useSelector } from "react-redux";
import AuthTemplate from "../components/template/AuthTemplate";
import AuthRedirect from "../components/template/AuthRedirectTemplate";

const AuthPage = () => {
  // Redux store에서 isLoggedIn 상태 가져오기
  const isLoggedIn = useSelector(
    (state) => state.auth.signin.status === "success"
  );

  return (
    <>
      {/* 로그인 전 */}
      {/* {!isLoggedIn && <AuthTemplate />} */}

      {/* 로그인 후 */}
      {/* {isLoggedIn && <AuthRedirect />} */}
      <AuthTemplate />
    </>
  );
};

export default AuthPage;
