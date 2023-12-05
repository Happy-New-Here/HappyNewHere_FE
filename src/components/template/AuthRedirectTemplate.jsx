import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/URL";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/auth-slice";

const AuthRedirectTemplate = () => {
  const [code, setCode] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // 코드가 있을 때만 처리
    if (code) {
      const handleKakaoLogin = async () => {
        try {
          const res = await axios.get(`${BASE_URL}/login/kakao?code=${code}`);
          const token = res.data;

          // Redux store에 로그인 상태 업데이트
          dispatch(AuthActions.setSignIn({ status: "success", token: token }));

          localStorage.setItem("accessToken", token)
          // 로그인 성공 시 페이지 이동
          navigate("/");
        } catch (e) {
          console.error(e);

          // Redux store에 로그인 실패 상태 업데이트
          // dispatch(AuthActions.setSignIn({ status: "success", token: "test" }));
          dispatch(AuthActions.setSignIn({ status: "failed", token: null }));

          // 로그인 실패 시 페이지 이동
          navigate("/auth");
        }
      };

      // 코드가 있을 때만 비동기 함수 호출
      handleKakaoLogin();
    }
  }, [code, navigate, dispatch]);

  useEffect(() => {
    // 코드 받아오기
    const codeParam = new URL(window.location.href).searchParams.get("code");
    setCode(codeParam || "");
  }, []);

  return (
    <>
      {/* 리디렉션 페이지 */}
      리디렉션
    </>
  );
};

export default AuthRedirectTemplate;
