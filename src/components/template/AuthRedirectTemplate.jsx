import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/URL";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../store/auth-slice";
import { setCurrentPage } from "../../store/currentPageSlice";
import { GetUserInfo } from "../../store/User-action";

const AuthRedirectTemplate = () => {
  const [code, setCode] = useState(null);
  const [second, setSecond] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPage = useSelector((state) => state.currentPage);
  const userIdFromStore = useSelector((state) => state.user.userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //카카오 로그인
        const res = await axios.get(`/api/login/kakao?code=${code}`);
        const token = res.data;

        dispatch(AuthActions.setSignIn({ status: "success", token: token }));
        localStorage.setItem("accessToken", token);
        console.log("1번 해결");

        try {
          await GetUserInfo(dispatch);
          setSecond(true);
          console.log("2번 해결" + second);
        } catch {
          console.log("2번 오류");
        }
      } catch (error) {
        console.error("Failed to get user info:", error);
        navigate("/auth");
      }
    };

    if (code) {
      fetchData();
    }
  }, [code, dispatch, navigate]);

  useEffect(() => {
    if (second) {
      console.log("3번 해결", userIdFromStore);
      // 여기서 리덕스에 저장한 값 불러와야함
      // userIdFromStore를 사용하여 userId가 null인지 확인
      if (userIdFromStore === null) {
        navigate("/auth/id/input");
      } else {
        navigate("/");
      }
    }
  }, [userIdFromStore, navigate]);

  useEffect(() => {
    // 로컬스토리지에 저장된 currentPage 값 가져오기
    const localCurrentPage = JSON.parse(localStorage.getItem("currentPage"));
    if (localCurrentPage) {
      dispatch(setCurrentPage(localCurrentPage)); // 로컬스토리지에 저장된 currentPage 값으로 상태를 업데이트
    }
  }, [dispatch]);

  useEffect(() => {
    const codeParam = new URL(window.location.href).searchParams.get("code");
    setCode(codeParam || "");
  }, []);

  return <></>;
};

export default AuthRedirectTemplate;
