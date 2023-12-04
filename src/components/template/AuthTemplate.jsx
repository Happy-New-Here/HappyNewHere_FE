import React from "react";
import KakaoLoginBtn from "../common/kakaoLoginBtn";
import { Calander } from "../common/Calander";

const AuthTemplate = () => {
  return (
    <>
      <KakaoLoginBtn />
      <div>
        <Calander.wrapper>
          <Calander.item day={18} />
          <Calander.item day={19} />
        </Calander.wrapper>
        로그인 템플릿 창입니다. 카카오 로그인 페이지입니다. 리다이렉트 URL
        설정할 때 template AuthRedirect.jsx로 해주세요~
      </div>
    </>
  );
};

export default AuthTemplate;
