import React from "react";
import KakaoLoginBtn from "../common/kakaoLoginBtn";
import { Calendar } from "../common/Calendar";

const AuthTemplate = () => {
  const weekDates = Calendar.getWeekDates();
  // console.log(weekDates[0].getDate());

  return (
    <>
      <KakaoLoginBtn />
      <div>
        <Calendar.wrapper>
          {weekDates.map((date, index) => (
            <Calendar.item
              key={index}
              day={date.getDay()}
              date={date.getDate()}
            />
          ))}
        </Calendar.wrapper>
        로그인 템플릿 창입니다. 카카오 로그인 페이지입니다. 리다이렉트 URL
        설정할 때 template AuthRedirect.jsx로 해주세요~
      </div>
    </>
  );
};

export default AuthTemplate;
