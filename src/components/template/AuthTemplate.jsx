import React, { useState } from "react";
import KakaoLoginBtn from "../common/kakaoLoginBtn";
import { Calendar } from "../common/Calendar";

const AuthTemplate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const weekDates = Calendar.getWeekDates();

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
              onClick={() => handleDateClick(date)}
            />
          ))}
        </Calendar.wrapper>
        {selectedDate && (
          <div>
            선택한 날짜: {selectedDate.toDateString()}
            {/* 선택한 날짜에 따른 메시지 목록 또는 내용을 여기에 표시 */}
          </div>
        )}
        로그인 템플릿 창입니다. 카카오 로그인 페이지입니다. 리다이렉트 URL
        설정할 때 template AuthRedirect.jsx로 해주세요~
      </div>
    </>
  );
};

export default AuthTemplate;
