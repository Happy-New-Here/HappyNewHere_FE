import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/URL";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../store/auth-slice";
import { setPreviousPage } from "../../store/previousPageSlice";

const AuthRedirectTemplate = () => {
  const [code, setCode] = useState(null); // 카톡 인가 코드
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const previousPage = useSelector((state) => state.previousPage);

  useEffect(() => {
    // 코드가 있을 때만 처리
    if (code) {
      const handleKakaoLogin = async () => {
        try {
          const res = await axios.get(`${BASE_URL}/login/kakao?code=${code}`);
          const token = res.data;

          // Redux store에 로그인 상태 업데이트, 로컬스토리지에 토큰 저장
          dispatch(AuthActions.setSignIn({ status: "success", token: token }));
          localStorage.setItem("accessToken", token);

          // 로그인 성공 시 페이지 이동
          navigate(previousPage);
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
    // 로컬스토리지에 저장된 previousPage 값 가져오기
    const localPreviousPage = JSON.parse(localStorage.getItem("previousPage"));
    if (localPreviousPage) {
      dispatch(setPreviousPage(localPreviousPage)); // 로컬스토리지에 저장된 previousPage 값으로 상태를 업데이트
    }
  }, [dispatch]);

  useEffect(() => {
    // 코드 받아오기
    const codeParam = new URL(window.location.href).searchParams.get("code");
    setCode(codeParam || "");
  }, []);

  return <></>;
};

export default AuthRedirectTemplate;
