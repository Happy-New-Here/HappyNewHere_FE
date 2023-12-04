import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/URL";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/auth-slice";
import "./KakaoLoginBtn.css";

const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;

const KakaoLoginBtn = () => {
  const REDIRECT_URI = "http://127.0.0.1:5173/auth/kakao/callback";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className="KakaoLoginBtn-wrapper">
      <a href={KAKAO_AUTH_URI} className="btn-kakao">
        <div className="Balloon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="8" cy="6.5" rx="8" ry="6.5" fill="#191900" />
            <path
              d="M2.35025 14.516C2.22081 14.9721 2.73969 15.3354 3.12405 15.0578L9.11076 10.7332C9.38956 10.5318 9.38649 10.1156 9.10476 9.91829L5.13427 7.13812C4.85253 6.94085 4.46037 7.08033 4.36647 7.4112L2.35025 14.516Z"
              fill="#191900"
            />
          </svg>
        </div>
        <span className="text"> 카카오 계정으로 로그인</span>
      </a>
    </div>
  );
};

export default KakaoLoginBtn;
