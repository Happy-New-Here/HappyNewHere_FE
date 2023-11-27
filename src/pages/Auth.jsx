import React from "react";
import { useSelector } from "react-redux";
import AuthTemplate from "../components/template/AuthTemplate";
import AuthRedirect from "../components/template/AuthRedirect";
import KakaoLoginBtn from "../components/common/KakaoLoginBtn";

const AuthPage = () => {
  // Redux store에서 isLoggedIn 상태 가져오기
  const isLoggedIn = useSelector(
    (state) => state.auth.signin.status === "success"
  );

  return (
    <>
      {/* 로그인 전 */}
      {!isLoggedIn && (
        <AuthTemplate>
          {/* 로그인 버튼을 AuthTemplate 내부에서 렌더링하고 콜백 함수를 전달 */}
          <KakaoLoginBtn />
        </AuthTemplate>
      )}

      {/* 로그인 후 */}
      {isLoggedIn && <AuthRedirect />}
    </>
  );
};

export default AuthPage;
