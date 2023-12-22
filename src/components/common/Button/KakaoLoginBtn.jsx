import styled from "styled-components";
import { REST_API_KEY } from "../../../utils/URL";

const KakaoLoginBtn = () => {
  const REDIRECT_URI = "happy-new-here-fe.vercel.app/auth/kakao/callback";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <KaKaoLoginBtnWrapper>
      <BtnKakao href={KAKAO_AUTH_URI}>
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
        <Text> 카카오 계정으로 로그인</Text>
      </BtnKakao>
    </KaKaoLoginBtnWrapper>
  );
};

export default KakaoLoginBtn;

const KaKaoLoginBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnKakao = styled.a`
  width: 300px;
  height: 46px;
  background: #FEE500;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: background-color 0.3s; 
`;

const Text = styled.span`
  /* font-family: 'Noto Sans', sans-serif; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;