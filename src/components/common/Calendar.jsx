import React from "react";
import BellSVG from "./BellSVG";
import styled from "styled-components";

export const Calendar = {
  wrapper: ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
  },

  getWeekDates: (startDay = null) => {
    const today = new Date(2023, 11, 25); // 시작 날짜를 2023년 12월 25일로 설정

    let day = today.getDate();

    // 만약 startDay가 제공되고 유효한 숫자인 경우 사용
    if (
      startDay !== null &&
      !isNaN(startDay) &&
      startDay >= 1 &&
      startDay <= 31
    ) {
      day = startDay;
    }

    today.setDate(day);

    // 시작 날짜가 월요일(1)이 아닌 경우, 이전 월요일로 이동
    if (today.getDay() !== 1) {
      today.setDate(today.getDate() - today.getDay() + 1);
    }

    const weekDates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);

      // 날짜가 현재 월을 벗어나면
      if (date.getMonth() !== today.getMonth()) {
        // 월을 조정하고 날짜를 25일로 설정
        date.setMonth(today.getMonth(), 25);
      }

      weekDates.push(new Date(date)); // 새로운 Date 객체로 추가
      today.setDate(today.getDate() + 1); // 다음 날짜로 이동
    }

    return weekDates;
  },

  // 날짜 하나
  item: ({ day, date, onClick }) => {
    // 현재 요일에 따라 type 값을 설정
    let type = "navy";

    switch (day % 7) {
      case 0: // 일요일
        type = "red";
        break;
      case 1: // 월요일
        type = "navy";
        break;
      case 2: // 화요일
        type = "white";
        break;
      case 3: // 수요일
        type = "green";
        break;
      case 4: // 목요일
        type = "maroon";
        break;
      case 5: // 금요일
        type = "pink";
        break;
      case 6: // 토요일
        type = "yellow";
        break;
      default:
        break;
    }

    return (
      <div className="w-8 h-[40.73px] relative flex-col justify-start items-start inline-flex">
        <BellSVG type={type} date={date} onClick={() => onClick(date)} />
      </div>
    );
  },
};

const StyledWrapper = styled.div`
  display: flex;
  //width: 22rem;
  width: 100%;
  height: 2.5625rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
`;
