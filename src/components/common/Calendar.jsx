import React from "react";
import BellSVG from "./BellSVG";
import styled from "styled-components";

export const Calendar = {
  wrapper: ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
  },

  getWeekDates: (startDay = null) => {
    const today = new Date();
    let day = startDay !== null ? startDay : today.getDate(); // 매개변수로 주의 시작일을 받거나 제공되지 않으면 현재 날짜 사용

    // 만약 제공된 날짜가 숫자가 아니거나 범위를 벗어나면 현재 날짜를 사용
    if (isNaN(day) || day < 1 || day > 31) {
      day = today.getDate();
    }

    today.setDate(day); // 날짜를 제공된 날짜나 현재 날짜로 설정

    // 현재 날짜가 월요일(1)이 아닌 경우, 이전 월요일로 이동
    if (today.getDay() !== 1) {
      today.setDate(today.getDate() - today.getDay() + 1);
    }

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      weekDates.push(date);
    }

    return weekDates;
  },

  // 날짜 하나
  item: ({ day, date, onClick }) => {
    // 현재 요일에 따라 type 값을 설정
    let type = "navy";
    console.log({ date } + "get it");

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
`;
